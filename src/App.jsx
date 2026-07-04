import { useState, useRef } from "react"; 
export default function App() {
   const [seconds, setSeconds] = useState(0); 
   // TODO 1: Create a ref `timerRef` with useRef(null) to hold the interval id.
   const timerRef=useRef(null);
   //  TODO 2: Write start() — if a timer isn't already running, start a setInterval that increments seconds every 1000ms, and store its id in timerRef.current. (Hint: use setSeconds(prev => prev + 1)) 
    
   function Start()
   {
    if (timerRef.current) return;
     timerRef.current=setInterval(()=>{
      setSeconds(prev => prev + 1)},1000); 
   } 
   // TODO 3: Write stop() — clearInterval(timerRef.current) and set timerRef.current = null.
   function Stop(){
    clearInterval(timerRef.current);
    timerRef.current = null;

   }
   //  TODO 4: Write reset() — stop the timer and set seconds back to 0. 
   function Reset(){
    clearInterval(timerRef.current);
    timerRef.current = null;
    setSeconds(0);
   }
   return ( 
  <div style={styles.card}>
      <p style={styles.time}>{seconds}s</p><br></br>
      <br></br>
      <div style={styles.row}> 
        <button style={styles.btn} onClick={Start}>Start</button>
        <button style={styles.btn} onClick={Stop}>Stop</button> 
        <button style={styles.btn} onClick={Reset}>Reset</button> 
   </div>
  </div> 
  ); 
}

   const styles = { card: { fontFamily: "system-ui", maxWidth: 320, margin: "40px auto", padding: 28,
     borderRadius: 16, textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,.08)" },
      time: { fontSize: 44, fontWeight: 700, color: "#5352ed", fontVariantNumeric: "tabular-nums" },
       row: { display: "flex", gap: 8, justifyContent: "center" },
        btn: { padding: "8px 16px", border: "none", borderRadius: 8, background: "#5352ed", color: "white", cursor: "pointer" },
       };