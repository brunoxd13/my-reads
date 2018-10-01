import React from "react";
import { shallow } from "enzyme";
import Book from "../index";

describe("Book", () => {
  const onMoveBook = jest.fn();

  const props = {
    onMoveBook: onMoveBook,

    book: {
      title: "The Linux Command Line",
      subtitle: "A Complete Introduction",
      authors: ["William E. Shotts, Jr.", "John Doe"],
      publisher: "No Starch Press",
      publishedDate: "2012",
      description:
        "THIS IS A DESCRIPTION WITH MORE THAN 140 LETTERS! THIS IS A DESCRIPTION WITH MORE THAN 140 LETTERS! THIS IS A DESCRIPTION WITH MORE THAN 140 LETTERS!",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9781593273897"
        },
        {
          type: "ISBN_10",
          identifier: "1593273894"
        }
      ],
      readingModes: {
        text: true,
        image: false
      },
      pageCount: 480,
      printType: "BOOK",
      categories: ["COMPUTERS"],
      averageRating: 4,
      ratingsCount: 2,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "1.2.2.0.preview.2",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      },
      language: "en",
      previewLink:
        "http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api",
      infoLink:
        "https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api",
      canonicalVolumeLink:
        "https://market.android.com/details?id=book-nggnmAEACAAJ",
      id: "nggnmAEACAAJ",
      shelf: "read"
    }
  };

  it("shallow renders correctly", () => {
    expect(shallow(<Book {...props} />));
  });

  it("renders a book with title", () => {
    const wrapper = shallow(<Book {...props} />);

    console.log(wrapper.find(".book-meta-info"));

    expect(wrapper.find(".book-meta-info").get(0).props.children).toEqual(
      "The Linux Command Line"
    );
  });
});
