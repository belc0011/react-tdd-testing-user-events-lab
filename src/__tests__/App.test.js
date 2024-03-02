import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";
import userEvent from "@testing-library/user-event";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  render(<App />);

  expect(screen.getByRole("textbox", { name: /name/i})).toBeInTheDocument();

  expect(screen.getByRole("textbox", {name: /email/i})).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);

  expect(screen.getByLabelText(/javascript methods/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/coding memes/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/github for dummies/i)).toBeInTheDocument();
});

test("the checkboxes are initially unchecked", () => {
  render(<App />);

  expect(screen.getByRole("checkbox", { name: /javascript methods/i})).not.toBeChecked();
  expect(screen.getByRole("checkbox", {name: /coding memes/i})).not.toBeChecked();
  expect(screen.getByRole("checkbox", {name: /github for dummies/i})).not.toBeChecked();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", {name: /name/i});
  userEvent.type(nameInput, "bob");
  expect(nameInput).toHaveValue("bob");

  const emailInput = screen.getByRole("textbox", {name: /email/i});
  userEvent.type(emailInput, "bob@email.com");
  expect(emailInput).toHaveValue("bob@email.com")
});

test("checked status of checkboxes changes when user clicks them", () => {
  render (<App />);

  const javascriptCheckbox = screen.getByRole("checkbox", { name: /javascript methods/i});
  const codingMemesCheckbox = screen.getByRole("checkbox", {name: /coding memes/i});
  const githubCheckbox = screen.getByRole("checkbox", {name: /github for dummies/i});

  userEvent.click(javascriptCheckbox);
  userEvent.click(codingMemesCheckbox);
  userEvent.click(githubCheckbox);

  expect(javascriptCheckbox).toBeChecked();
  expect(codingMemesCheckbox).toBeChecked();
  expect(githubCheckbox).toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />);

  userEvent.click(screen.getByRole("button", {name: /submit/i}));

  expect(screen.getByText(/for your submission/i));
});
