// Testing หน้าล็อคอิน
import React from "react";
import { render } from "@testing-library/react";
import Login from "../src/page1/Login";
import "@testing-library/jest-dom/extend-expect";


test("renders login form", () => {
  const { getByPlaceholderText, getByText } = render(<Login />);
  
  const emailInput = getByPlaceholderText("Username");
  const passwordInput = getByPlaceholderText("Password");
  const submitButton = getByText("ลงชื่อเข้าใช้");

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});


