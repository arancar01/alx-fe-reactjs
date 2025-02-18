import { useState } from "react";

function Counter() {
  // تعريف الحالة (State) مع قيمة ابتدائية 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>Current Count: {count}</p>
      
      {/* زر زيادة العداد */}
      <button onClick={() => setCount(count + 1)} style={{ margin: "5px", padding: "10px" }}>
        Increment
      </button>

      {/* زر تقليل العداد */}
      <button onClick={() => setCount(count - 1)} style={{ margin: "5px", padding: "10px" }}>
        Decrement
      </button>

      {/* زر إعادة التعيين */}
      <button onClick={() => setCount(0)} style={{ margin: "5px", padding: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
