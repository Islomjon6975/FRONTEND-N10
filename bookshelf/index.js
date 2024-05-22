import PromptSync from "prompt-sync";
import chalk from "chalk";

const prompt = PromptSync();

let bookshelf = [
   {
      _id: "1",
      title: "Atomic habits",
      author: "Jack Smith",
      pages: 300,
      price: 70,
      isRead: false,
   },
   {
      _id: "2",
      title: "Rich dad and poor dad",
      author: "John Smith",
      pages: 250,
      price: 60,
      isRead: false,
   },
   {
      _id: "3",
      title: "SOS",
      author: "Tom Smith",
      pages: 100,
      price: 65,
      isRead: false,
   },
];

function showAvailableBooks(db = bookshelf) {
   db.forEach((book) => {
      console.log(
         chalk.magentaBright.italic(
            `${book._id}. ${book.title} \n   ${book.author} \n   ${book.pages} pages \n   $${book.price} \n `
         )
      );
   });
}

function addingBook() {
   let title = "";
   while (!title.length) {
      title = prompt(chalk.blue.italic.bold("Title: "));
   }

   let author = "";
   while (!author.length) {
      author = prompt(chalk.blue.italic.bold("Author: "));
   }

   let pages = 0;
   while (pages <= 0) {
      pages = +prompt(chalk.blue.italic.bold("Pages: "));
   }

   let price = 0;
   while (price <= 0) {
      price = +prompt(chalk.blue.italic.bold("Price: "));
   }

   const newBook = {
      _id: String(bookshelf.length + 1),
      title: title,
      author: author,
      pages: pages,
      price: price,
      isRead: false,
   };

   bookshelf = [...bookshelf, newBook];

   console.log(
      chalk.green.italic(
         `${chalk.bold.underline(newBook.title)} has successfully added! \n`
      )
   );
}

function searchBook() {
   let option = "";
   while (!option.length) {
      option = prompt(chalk.blue.bold.italic("Option (title/author): "));
   }

   let title = "";
   while (!title.length) {
      title = prompt(chalk.blue.bold.italic(`${option}: `));
   }

   const foundBooks = bookshelf.filter((book) =>
      book[option].toLowerCase().includes(title.toLowerCase())
   );

   showAvailableBooks(foundBooks);
}

function updatingBook() {
   console.log("Updating book");
}

function removingBook() {
   const ids = bookshelf.map((book) => book._id); // [1,2,3]

   let id = "";
   while (!ids.includes(id)) {
      id = prompt(`ID (${ids.join("/")}): `);
   }

   let availableBooks = bookshelf.filter((book) => book._id !== id);

   showAvailableBooks(availableBooks);
}

function start() {
   let isExit = true;
   let option = "";

   while (isExit) {
      option = prompt(
         chalk.red.bold.italic(
            "WELCOME TO OUR STORE! \n\n 1 - Show available books \n 2 - Adding Book \n 3 - Searching Book \n 4 - Updating Book \n 5 - Removing Book \n\n 0 - Exit \n\n : "
         )
      );

      switch (option) {
         case "1": {
            console.log(chalk.bgBlueBright(" Show Available Books \n"));
            showAvailableBooks();
            break;
         }
         case "2": {
            console.log(chalk.bgBlueBright(" Adding \n"));
            addingBook();
            break;
         }
         case "3": {
            console.log(chalk.bgBlueBright(" Searching \n"));
            searchBook();
            break;
         }
         case "4": {
            console.log(chalk.bgBlueBright(" Updating \n"));
            updatingBook();
            break;
         }
         case "5": {
            console.log(chalk.bgBlueBright(" Removing \n"));
            removingBook();
            break;
         }
         case "0": {
            console.log(chalk.bgBlueBright(" Exit \n"));
            isExit = false;
            break;
         }
         default: {
            console.log(
               chalk.bgRed(" ERROR: 1,2,3,4,5,0 lardan birini kiriting! ")
            );
         }
      }
   }
}

start();
