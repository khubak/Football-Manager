import { useState } from "react";

export const usePages = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  return { currentPage, setCurrentPage };
};