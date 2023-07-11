import * as React from "react";
import { useLoadScript } from "@react-google-maps/api";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FaAddressCard } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { Tooltip } from "@mui/material";

const libraries = ["places"];

const PlacesAutocomplete = props => {
  const [isValid, setIsValid] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [visible, setVisible] = React.useState(false);
  const [dummy, setDummy] = React.useState("");
  const autoCompleteInput = React.useRef(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GMAPS_API_KEY,
    libraries,
  });

  const resetAddress = () => {
    setDummy("");
    props.setStreetAddress("");
    props.setCity("");
    props.setPostalCode("");
    props.setCountry("");
    props.setRegion("");
  };

  React.useEffect(() => {
    if (loadError || !navigator.onLine) {
      setErrorMessage("Error loading maps");
      return;
    }

    if (isLoaded && window.google) {
      console.log(autoCompleteInput);
      const autocomplete = new window.google.maps.places.Autocomplete(autoCompleteInput.current, { componentRestrictions: { country: "ca" } });

      autoCompleteInput.current.addEventListener("input", () => {
        setVisible(true);
        if (typeof props.setAddress === "function") {
          props.setAddress(null);
        }
        setIsValid(false);
      });

      autocomplete.addListener("place_changed", () => {
        resetAddress();
        const place = autocomplete.getPlace();
        let streetNum, streetName;

        if (place.address_components) {
          setErrorMessage(null);
          setIsValid(true);

          props.page === "taskposting"
            ? props.setAddress(place.formatted_address)
            : place.address_components.forEach(address => {
                let addressType = address.types;

                props.setAddress(place.formatted_address);
                if (addressType.includes("postal_code") && typeof props.setPostalCode === "function") props.setPostalCode(address.long_name);
                if (addressType.includes("street_number")) streetNum = address.long_name;
                if (addressType.includes("route")) streetName = address.long_name;
                if (addressType.includes("country") && typeof props.setCountry === "function") props.setCountry(address.long_name);

                if (addressType.includes("administrative_area_level_1") && typeof props.setRegion === "function") props.setRegion(address.long_name);
                else if (addressType.includes("administrative_area_level_2") && typeof props.setRegion === "function")
                  props.setRegion(address.long_name);

                if (addressType.includes("locality") && typeof props.setCity === "function") props.setCity(address.long_name);
                else if (addressType.includes("postal_town") && typeof props.setCity === "function") props.setCity(address.long_name);
              });

          if (streetName) {
            streetNum ? props.setStreetAddress(`${streetNum} ${streetName}`) : props.setStreetAddress(`${streetName}`);
          }
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, loadError]);

  return (
    <>
      {props.page === "taskposting" ? (
        <>
          <label htmlFor="address" className="flex items-center text-sm mb-2 mt-10">
            Address
            <Tooltip title="Your exact address will be kept private and only shared with the accepted helper for this task" placement="right">
              <div>
                <HiOutlineInformationCircle className="ml-1" size={18} />
              </div>
            </Tooltip>
          </label>
          <input
            ref={autoCompleteInput}
            required
            type="text"
            name="address"
            id="autocomplete"
            onFocus={() => setIsFocused(true)}
            placeholder="Search for address"
            className={`${
              isFocused && !isValid ? "focus:outline-red-600 border-red-600" : "border-primary"
            } bg-white rounded h-10 p-2 text-sm border-[1px]`}
          />
          {errorMessage ? (
            <div className="pt-1 pl-0.5 md:text-sm text-xs text-red-600">{errorMessage}</div>
          ) : (
            isFocused && !isValid && <div className="pt-1 pl-0.5 md:text-sm text-xs text-red-600">Invalid address</div>
          )}
        </>
      ) : (
        <>
          <label htmlFor="address" className="w-[295px] sm:w-[355px] xl:w-[445px] text-xs font-medium mb-[7px] text-left">
            Address
          </label>
          <div className="relative">
            <FaAddressCard className="absolute left-2 top-1/2 -translate-y-1/2 transform" />
            <input
              ref={autoCompleteInput}
              className={`${
                isFocused && !isValid ? "focus:outline-red-600 border-red-600" : "border-primary"
              } h-[35px] text-xs rounded-md border w-[300px] sm:w-[360px] xl:w-[450px] pl-8 pr-2"
              `}
              type="text"
              name="address-signup"
              id="address-signup"
              value={`${!props.streetAddress ? dummy : props.streetAddress}`}
              placeholder="Please enter your address to autofill"
              onChange={e => setDummy(e.target.value)}
              required
            />
            {visible && document.getElementById("address-signup").value.length > 0 && (
              <IoIosCloseCircle
                className="absolute right-2 top-1/2 -translate-y-1/2 transform"
                onClick={() => {
                  document.getElementById("address-signup").value = "";
                  setVisible(false);
                  resetAddress();
                }}
              />
            )}
          </div>
          {errorMessage ? (
            <div className="pt-1 pl-0.5 md:text-sm text-xs text-red-600">{errorMessage}</div>
          ) : (
            isFocused && !isValid && <div className="pt-1 pl-0.5 md:text-sm text-xs text-red-600">Invalid address</div>
          )}
        </>
      )}
    </>
  );
};

export default PlacesAutocomplete;
