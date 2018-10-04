import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount } from "enzyme";
import Main from "../pages/main";

const books = [
  {
    title: "The Linux Command Line",
    subtitle: "A Complete Introduction",
    authors: ["William E. Shotts, Jr."],
    publisher: "No Starch Press",
    publishedDate: "2012",
    description:
      "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial \"shell shock,\" you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's \"Evolution of a SysAdmin\"",
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
    shelf: "currentlyReading"
  },
  {
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
  },
  {
    title: "The Cuckoo's Calling",
    authors: ["Robert Galbraith"],
    publisher: "Mulholland Books",
    publishedDate: "2013-04-30",
    description:
      "A brilliant debut mystery in a classic vein: Detective Cormoran Strike investigates a supermodel's suicide. After losing his leg to a land mine in Afghanistan, Cormoran Strike is barely scraping by as a private investigator. Strike is down to one client, and creditors are calling. He has also just broken up with his longtime girlfriend and is living in his office. Then John Bristow walks through his door with an amazing story: His sister, thelegendary supermodel Lula Landry, known to her friends as the Cuckoo, famously fell to her death a few months earlier. The police ruled it a suicide, but John refuses to believe that. The case plunges Strike into the world of multimillionaire beauties, rock-star boyfriends, and desperate designers, and it introduces him to every variety of pleasure, enticement, seduction, and delusion known to man. You may think you know detectives, but you've never met one quite like Strike. You may think you know about the wealthy and famous, but you've never seen them under an investigation like this. Introducing Cormoran Strike, this is the acclaimed first crime novel by J.K. Rowling, writing under the pseudonym Robert Galbraith.",
    industryIdentifiers: [
      {
        type: "ISBN_13",
        identifier: "9780316206860"
      },
      {
        type: "ISBN_10",
        identifier: "0316206865"
      }
    ],
    readingModes: {
      text: true,
      image: false
    },
    pageCount: 464,
    printType: "BOOK",
    categories: ["Fiction"],
    averageRating: 3.5,
    ratingsCount: 3037,
    maturityRating: "NOT_MATURE",
    allowAnonLogging: true,
    contentVersion: "1.21.20.0.preview.2",
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false
    },
    imageLinks: {
      smallThumbnail:
        "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "en",
    previewLink:
      "http://books.google.com/books?id=evuwdDLfAyYC&printsec=frontcover&dq=rowling&hl=&cd=4&source=gbs_api",
    infoLink:
      "https://play.google.com/store/books/details?id=evuwdDLfAyYC&source=gbs_api",
    canonicalVolumeLink:
      "https://market.android.com/details?id=book-evuwdDLfAyYC",
    id: "evuwdDLfAyYC",
    shelf: "wantToRead"
  },
  {
    title: "Lords of Finance",
    subtitle: "The Bankers Who Broke the World",
    authors: ["Liaquat Ahamed"],
    publisher: "Penguin",
    publishedDate: "2009-01",
    description:
      "Argues that the stock market crash of 1929 and subsequent Depression occurred as a result of poor decisions on the part of four central bankers who jointly attempted to reconstruct international finance by reinstating the gold standard.",
    industryIdentifiers: [
      {
        type: "ISBN_10",
        identifier: "159420182X"
      },
      {
        type: "ISBN_13",
        identifier: "9781594201820"
      }
    ],
    readingModes: {
      text: false,
      image: false
    },
    pageCount: 564,
    printType: "BOOK",
    categories: ["Business & Economics"],
    averageRating: 4.5,
    ratingsCount: 14,
    maturityRating: "NOT_MATURE",
    allowAnonLogging: false,
    contentVersion: "1.0.0.0.preview.0",
    imageLinks: {
      smallThumbnail:
        "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "en",
    previewLink:
      "http://books.google.com/books?id=74XNzF_al3MC&printsec=frontcover&dq=finance&hl=&cd=1&source=gbs_api",
    infoLink:
      "http://books.google.com/books?id=74XNzF_al3MC&dq=finance&hl=&source=gbs_api",
    canonicalVolumeLink:
      "https://books.google.com/books/about/Lords_of_Finance.html?hl=&id=74XNzF_al3MC",
    id: "74XNzF_al3MC",
    shelf: "read"
  }
];

describe("Main page", () => {
  fetch.mockResponse(JSON.stringify({ books: books }));

  it("Render the main component with shallow", async () => {
    expect(shallow(<Main />));
  });

  it("Render the main component with mount", async () => {
    expect(
      mount(
        <MemoryRouter initialEntries={["/"]}>
          <Main />
        </MemoryRouter>
      )
    );
  });

  it("Render the main component on search page with mount", async () => {
    expect(
      mount(
        <MemoryRouter initialEntries={["/search"]}>
          <Main />
        </MemoryRouter>
      )
    );
  });

  it("Search a book at main page", async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Main />
      </MemoryRouter>
    );

    jest.useFakeTimers();

    const onChangeInput = wrapper
      .find(".search-input")
      .first()
      .props().onChange;

    onChangeInput({ target: { value: "astronomy" } });

    jest.runAllTimers();
  });

  it("Search a book at search page", async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Main />
      </MemoryRouter>
    );

    jest.useFakeTimers();

    const onChangeInput = wrapper
      .find(".search-input")
      .first()
      .props().onChange;

    onChangeInput({ target: { value: "astronomy" } });

    jest.runAllTimers();
  });

  it("Search a book and back to home", async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Main />
      </MemoryRouter>
    );

    jest.useFakeTimers();

    const onChangeInput = wrapper
      .find(".search-input")
      .first()
      .props().onChange;

    onChangeInput({ target: { value: "" } });

    jest.runAllTimers();
  });

  it("Search a book and no result found", async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Main />
      </MemoryRouter>
    );

    jest.useFakeTimers();

    const onChangeInput = wrapper
      .find(".search-input")
      .first()
      .props().onChange;

    onChangeInput({ target: { value: "sauydgasyu" } });

    jest.runAllTimers();
  });

  it("Move a book", async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Main />
      </MemoryRouter>
    );

    // jest.useFakeTimers();

    console.log(
      wrapper
        .find(".book-card")
        .first()
        .debug()
    );

    // const onChangeInput = wrapper
    //   .find(".book-select")
    //   .first()
    //   .props().onChange;

    // onChangeInput({ target: { value: "read" } });

    // jest.runAllTimers();
  });
});
