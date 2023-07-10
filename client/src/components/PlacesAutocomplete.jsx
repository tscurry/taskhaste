import * as React from "react";
import { useLoadScript } from "@react-google-maps/api";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FaAddressCard } from "react-icons/fa";
import { Tooltip } from "@mui/material";

const libraries = ["places"];

const PlacesAutocomplete = props => {
  const [isValid, setIsValid] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const autoCompleteInput = React.useRef(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GMAPS_API_KEY,
    libraries,
  });

  React.useEffect(() => {
    if (loadError || !navigator.onLine) {
      setErrorMessage("Error loading maps");
      return;
    }

    if (isLoaded && window.google) {
      const autocomplete = new window.google.maps.places.Autocomplete(autoCompleteInput.current, {});

      autoCompleteInput.current.addEventListener("input", () => {
        if (typeof props.setAddress === "function") {
          props.setAddress(null);
        }
        setIsValid(false);
      });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        let streetNum;

        if (place.address_components) {
          setErrorMessage(null);
          setIsValid(true);

          props.page === "taskposting"
            ? props.setAddress(place.formatted_address)
            : place.address_components.forEach(address => {
                let addressType = address.types;

                console.log(place.address_components);
                if (addressType.includes("postal_code")) props.setPostalCode(address.long_name);
                if (addressType.includes("street_number")) streetNum = address.long_name;
                if (addressType.includes("route")) props.setStreet(`${streetNum} ${address.long_name}`);
                if (addressType.includes("country")) props.setCountry(address.long_name);
                if (addressType.includes("administrative_area_level_1")) props.setRegion(address.long_name);
                if (addressType.includes("locality")) props.setCity(address.long_name);
              });
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
              name="address"
              defaultValue={props.street}
              id="address"
              placeholder="Please enter your address"
            />
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
