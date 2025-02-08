import { Button, Grid2, IconButton, TextField } from "@mui/material";
import "./App.css";
import Card from "./component/Card";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
function App() {
  const [cardData, setCardData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const shimmer = <div className="shimmer"></div>;
  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   const mainData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
  //   const json = await mainData.json();
  //   const extractedData = json?.data?.cards?.slice(3).map((item) => ({
  //     cloudinaryImageId: item?.card?.card?.info?.cloudinaryImageId || "",
  //     costForTwo: item?.card?.card?.info?.costForTwo || "N/A",
  //     name: item?.card?.card?.info?.name || "Unknown",
  //     avgRating: item?.card?.card?.info?.avgRating || "N/A",
  //     sla: item?.card?.card?.info?.sla?.deliveryTime
  //       ? `${item.card.card.info.sla.deliveryTime} mins`
  //       : "N/A",
  //   }));
  //   setCardData(extractedData);
  //   setFilterRestaurant(extractedData);
  // };
  const fetchData = async ()=>{
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    const extractedData = json.map((item,index)=>({
      title: item?.title  + index || "",
      price: item?.price || "",
      description: item.description || "",
      image: item.image || "No image found",
      rating: item.rating.rate || "NA"
    }))
    
    setCardData(extractedData)
    setFilterRestaurant(extractedData)
  }
  return (
    <div className="App">
   
      <br />
      <Grid2 container spacing={2} className="container">
        <Grid2 size={{ xs: 12 }} className="card">
          <h2>
            Explore your favourite products
            <Button
              variant="contained"
              size="small"
              sx={{ marginLeft: "10px", backgroundColor: "#ff7300" }}
              onClick={() => {
                const filterData = cardData.filter((x) => x.rating >= 4);
                setFilterRestaurant(filterData);
                
              }}
            >
              4+ Rating
            </Button>
      

            <div className="search">
              <TextField label="Search" color="" size="small" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)}/>
              <IconButton aria-label="search" onClick={()=>{
               const filterData =  cardData.filter((x)=> x.title.toLowerCase().includes(searchValue.toLowerCase()))
               setFilterRestaurant(filterData);
}}>
                <SearchIcon />
              </IconButton>
            </div>
           
          </h2>
        </Grid2>
        {cardData.length === 0 && [
          shimmer,
          shimmer,
          shimmer,
          shimmer,
          shimmer,
          shimmer,
        ]}
        {filterRestaurant.map((resCardData, index) => {
          return <Card {...resCardData} key={index} />;
        })}
      </Grid2>
    </div>
  );
}

export default App;
