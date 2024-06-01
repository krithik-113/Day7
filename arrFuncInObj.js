async function Data() {
  let data = await fetch("https://restcountries.com/v3.1/all");
  let getdata = await data.json();
  getdata.filter((element) => {
    if (element.region == "Asia") {
      console.log(element.name.common);
    }
  });
  getdata.filter((element) => {
    if (element.population < 200000) {
      console.log(element.population);
    }
  });
  getdata.forEach((element) => {
    if (element.region == "Asia") {
      console.log(element.name);
      console.log(element.capital);
      console.log(element.flags.png);
    }
  });
  var pop = getdata.reduce((prev, curr) => {
    if (typeof prev === "object") {
      return prev.population + curr.population;
    }
    return prev + curr.population;
  });
  console.log(pop);

  getdata.map((countries) => {
    if (countries.currencies && Object.keys(countries.currencies) == "USD") {
      console.log(countries.name.common);
    }
  });
}

Data();
