import { useState, useEffect } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const resp = await fetch("/api/pizza-of-the-day");
      const data = await resp.json();

      setPizzaOfTheDay(data);
    }

    fetchPizzaOfTheDay();
  }, []);
  return pizzaOfTheDay;
};
