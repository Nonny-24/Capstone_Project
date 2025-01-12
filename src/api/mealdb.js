document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("searchBtn").addEventListener("click", () => {
    const query = document.getElementById("search").value;
    const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network problems");
        }
        return response.json();
      })
      .then(data => {
        console.log(data); 
      })
      .catch(error => {
        console.error("Fetch error:", error);
      });
  });
});


const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);}