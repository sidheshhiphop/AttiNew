import React, { useEffect, useRef } from "react";
import { Button, Input, Space } from "antd";
import { CountrySelector, usePhoneInput } from "react-international-phone";
import { useState } from "react";
import "react-international-phone/style.css";
import Otp from "./otp";
const Numberfield = ({ value, onChange }) => {
  const phoneInput = usePhoneInput({
    defaultCountry: "us",
    value,
    onChange: (data) => {
      onChange(data.phone);
    },
  });

  const inputRef = useRef(null);

  useEffect(() => {
    if (phoneInput.inputRef && inputRef.current?.input) {
      phoneInput.inputRef.current = inputRef.current.input;
    }
  }, [inputRef, phoneInput.inputRef]);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Space.Compact>
        <CountrySelector
          selectedCountry={phoneInput.country}
          onSelect={(country) => phoneInput.setCountry(country.iso2)}
          renderButtonWrapper={({ children, rootProps }) => (
            <Button
              {...rootProps}
              style={{
                padding: "4px",
                height: "100%",
                zIndex: 1, // fix focus overlap
              }}
            >
              {children}
            </Button>
          )}
          dropdownStyleProps={{
            style: {
              top: "35px",
            },
          }}
        />
        <Input
          placeholder="Phone number"
          type="tel"
          value={phoneInput.phone}
          onChange={phoneInput.handlePhoneValueChange}
          ref={inputRef}
          style={{
            width: "200px",
          }}
        />
      </Space.Compact>
    </div>
  );
};

export default Numberfield;
