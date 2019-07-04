import React from "react";
import {
  render,
  waitForElement,
  fireEvent,
  cleanup
} from "@testing-library/react";
import "jest-dom/extend-expect";
import Book from "../components/book";

afterEach(cleanup);

describe("Book", () => {
  const onMoveBook = jest.fn();

  const props = {
    onMoveBook: onMoveBook,

    book: {
      title: "Learning Web Development with React and Bootstrap",
      authors: ["Harmeet Singh", "Mehul Bhatt"],
      publishedDate: "2016-12-30",
      description:
        "Build real-time responsive web apps using React and BootstrapAbout This Book* Showcase the power of React-Bootstrap through real-world examples* Explore the benefits of integrating React with various frameworks and APIs* See the benefits of using the latest frameworks to make your web development experience enchantingWho This Book Is ForThis book is for anybody who is interested in modern web development and has intermediate knowledge of HTML, CSS, and JavaScript. Basic knowledge of any JavaScript MVC framework would also be helpful.What You Will Learn* See how to integrate React-Bootstrap with React* Explore the Redux architecture and understand its benefits* Build a custom responsive theme* Easily interact with DOM on your web browser* Appreciate the advantages of using JSX* Get acquainted with the various routing methods in React* Integrate external APIs into ReactIn DetailReact-Bootstrap is one of the most popular front-end frameworks, and integrating it with React allows web developers to write much cleaner code. This book will help you gain a thorough understanding of the React-Bootstrap framework and show you how to build impressive web apps.In this book, you will get an overview of the features of React-Bootstrap and ReactJS, along with the integration of ReactJS components with ReactJS. You will understand the benefits of using JSX and the Redux architecture. The server-side rendering of React will also be shown. All the concepts are explained by developing real-world examples.By the end of this book, you will be equipped to create responsive web applications using React-Bootstrap with ReactJS, and will have an insight into the best practices.",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "1786462494"
        },
        {
          type: "ISBN_13",
          identifier: "9781786462497"
        }
      ],
      readingModes: {
        text: false,
        image: false
      },
      pageCount: 278,
      printType: "BOOK",
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "preview-1.0.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      },
      language: "en",
      previewLink:
        "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&cd=6&source=gbs_api",
      infoLink:
        "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/Learning_Web_Development_with_React_and.html?hl=&id=sJf1vQAACAAJ",
      id: "sJf1vQAACAAJ",
      shelf: "currentlyReading"
    }
  };

  it("Render the component book", () => {
    const container = render(<Book {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("Render the component book with long description", () => {
    const longBookDescription =
      "Build real-time responsive web apps using React and BootstrapAbout This Book* Showcase the power of React-Bootstrap through real-world examples* Explo...";

    const { getByTestId } = render(<Book {...props} />);
    const bookDescriptionElement = getByTestId("book-description");
    const bookDescription = bookDescriptionElement.innerHTML;

    expect(bookDescription).toBe(longBookDescription);
  });

  it("Render the component book with short description", () => {
    const shortBookDescription = "Build real-time responsive";
    props.book.description = shortBookDescription;

    const { getByTestId } = render(<Book {...props} />);
    const bookDescriptionElement = getByTestId("book-description");
    const bookDescription = bookDescriptionElement.innerHTML;

    expect(bookDescription).toBe(shortBookDescription);
  });

  it("Render the component book without description", () => {
    const noBookDescription = "";
    props.book.description = noBookDescription;

    const { getByTestId } = render(<Book {...props} />);
    const bookDescriptionElement = getByTestId("book-description");
    const bookDescription = bookDescriptionElement.innerHTML;

    expect(bookDescription).toBe(noBookDescription);
  });

  it("Render the component book with img", () => {
    const { getByAltText } = render(<Book {...props} />);
    const imgElement = getByAltText("Book");

    expect(imgElement).toHaveAttribute(
      "src",
      expect.stringContaining(props.book.imageLinks.thumbnail)
    );
  });

  it("Render the component book without img", () => {
    const defaultCoverImage =
      "https://books.google.com/googlebooks/images/no_cover_thumb.gif";

    delete props.book.imageLinks;

    const { getByAltText } = render(<Book {...props} />);
    const imgElement = getByAltText("Book");

    expect(imgElement).toHaveAttribute(
      "src",
      expect.stringContaining(defaultCoverImage)
    );
  });

  it("Check the book info preview", () => {
    const { getByTestId } = render(<Book {...props} />);
    const bookInfoElement = getByTestId("book-info-preview");

    expect(bookInfoElement).toHaveAttribute(
      "href",
      expect.stringContaining(props.book.previewLink)
    );
  });

  it("Check the book with no info preview", () => {
    delete props.book.previewLink;
    const { getByTestId } = render(<Book {...props} />);
    const bookInfoElement = getByTestId("book-info-preview");

    expect(bookInfoElement).not.toHaveAttribute("href");
  });

  it("Click on delete book", async () => {
    const { getByTestId } = render(<Book {...props} />);
    const bookDeleteElement = getByTestId("btn-delete");

    fireEvent.click(bookDeleteElement);

    const popupDelete = await waitForElement(() => getByTestId("popup-delete"));
    console.log(popupDelete);
  });

  // it("Render the component book with rate", () => {
  //   const { getByTestId } = render(<Book {...props} />);
  //   const rateElement = getByTestId("book-rate");

  //   expect(rateElement).toBeDisabled();
  // });

  // it("Render the component book with meta", () => {
  //   const { getByTestId } = render(<Book {...props} />);
  //   const metaElement = getByTestId("book-meta");

  //   // expect(metaElement).toHaveTextContent();
  //   expect(metaElement).toHaveAttribute("title");

  //   // const bookDescription = bookDescriptionElement.innerHTML;

  //   // console.log(bookDescription);

  //   // expect(bookDescription).toBe(noBookDescription);
  // });
});
