const shorten = (title) => {
  let newTitle = `${title.split(" ")[0]} ${title.split(" ")[1]}`;

  //   IF SECOND STRING WAS - OR . ADD ONE MORE STRING
  if (title.split(" ")[1] === "-" || title.split(" ")[1] === ".") {
    newTitle = `${title.split(" ")[0]} ${title.split(" ")[1]} ${
      title.split(" ")[2]
    }`;
  }

  return newTitle;
};

export default shorten;
