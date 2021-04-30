import "./App.css";
import Navbar from "./components/Navbar/index.js";
import Banner from "./components/Banner/index.js";
import Shows from "./components/Shows/index.js";
import { showsData, titles } from "./showsData";

function App() {
  function shuffleData(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  return (
    <div className="App">
      <Navbar />
      <Banner
        background="https://occ-0-784-2774.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABegl0nU63iKEIkiqt5eJq7PZ7xYeRAun2dn8hu5tdLWeKfeiQ_fwSy9tYrukW19Q1AiL_2ZWCoWc52ZakNf4B4qlZ6he.webp?r=1c7"
        logo="https://occ-0-784-2774.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSbWDo6_T1XL7mqn--NJKmVL4fkrHIreWnY3LT8urxZiemlnYAFZslG2iUEgCikZ4k35VBdkR8cvGFcJ2HqKKgcdw_ZlelVKUxnC1l0Wq5jgxoZ2mTWV_SVE5aFe3t00_FTfH6Q6gYEtnmOkxZdJh98Mv4IMQXhxqa0Sx4B7tF5QYQ.webp?r=6f7"
        title="Türkiye Listesinde Bugün 2 Numara"
        dsc="Karanlığın ikiye bölündüğü bir dünyada, doğaüstü güçleri olan bir
          yetim. O bir kurtarıcı mı... Yoksa sadece bir piyon mu?"
      />
      {titles.map(({ title }, i) => (
        <Shows title={title} data={shuffleData(showsData)} />
      ))}
    </div>
  );
}

export default App;
