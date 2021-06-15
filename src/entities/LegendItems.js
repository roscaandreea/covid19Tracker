import LegendItem from "./LegendItem";

const LegendItems= [
    new LegendItem(
        "1,000,000 +",
        "purple",
        // "#8b0000",
        (cases) => cases >= 1_000_000,
        "white"
      ),
    
      new LegendItem(
        "500,000 - 999,999",
        // "#741f1f",
        "blue",
        (cases) => cases >= 500_000 && cases < 1_000_000,
        "White"
      ),
    
      new LegendItem(
        "200,000 - 499,999",
        "orange",
        (cases) => cases >= 200_000 && cases < 500_000
      ),
    
      new LegendItem(
        "50,000 - 199,999",
        "yellow",
        (cases) => cases >= 50_000 && cases < 200_000
      ),
    
      new LegendItem(
        "0 - 49,999",
        "green",
        (cases) => cases > 0 && cases < 50_000
      ),
    
      new LegendItem("No Data", "pink", (cases) => true)
];

export default LegendItems;