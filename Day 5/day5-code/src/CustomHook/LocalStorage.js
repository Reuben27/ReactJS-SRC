const { useState } = require("react");

function useLocalStorage(key, initialValue) {
  // Retrieve data from localStorage on component mount
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // State to hold the current value
  const [value, setValue] = useState(initial);

  // Update localStorage when the value changes
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}
export default useLocalStorage;
