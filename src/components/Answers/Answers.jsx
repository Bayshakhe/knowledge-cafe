import React from "react";

const Answers = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-2xl m-5 underline">
        Question & Answer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-gray-100 p-5 rounded-lg">
          <h4 className="font-bold">1. What is the difference between props and state?</h4>
          <p><strong>Answer: </strong>State is mutable. We can change it's value. Basically we use it for changing value. State define self component and other component can't access this state. But we can send this as read-only property by props. <br />
          Props are immutable. It is read-only property and can't be changed. We access other components value or data by using props</p>
        </div>
        <div className="bg-gray-100 p-5 rounded-lg">
          <h4 className="font-bold">2. How does useState work?</h4>
          <p><strong>Answer:</strong> useState is React hook which is used in functional component. It returns an array which first element is a current state value and other element is a function. And useState takes initial value as a parameter. It gives us updated value When we call this state.</p>
        </div>
        <div className="bg-gray-100 p-5 rounded-lg">
          <h4 className="font-bold">3. What is the purpose of using useEffect without load data?</h4>
          <p><strong>Answer:</strong> useEffect is React hook. It takes an anonymous funtion and an array. When we want to load data then there is empty array we pass. But there are many purpose of using useEffect without load data. <br />
          When we want to state update after every render then we pass a dependencies in this array. And depend on this dependencies useEffect called auto by React and update the DOM.</p>
        </div>
        <div className="bg-gray-100 p-5 rounded-lg">
          <h4 className="font-bold">4. How does react work?</h4>
          <p><strong>Answer:</strong> React is very popular javaScript library for building user interface. It is very efficient, flexible, fast and component based. <br />
          React creates a virtual DOM. Which is copy of Real Dom. When user interact the site it might be changed. React finds exactly that portion which user do change and immidiately React replace this by help of Diff Algorithm.</p>
        </div>
      </div>
    </div>
  );
};

export default Answers;
