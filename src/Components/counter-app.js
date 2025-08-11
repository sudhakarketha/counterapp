// import React, { useState } from "react";
// import './counter-app.css'
// export default function CounterApp() {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(count + 1);
//     };

//     const decrement = () => {
//         setCount(count - 1);
//     };

//     const reset = () => {
//         setCount(0);
//     };

//     return (
//         <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-200 to-blue-500">
//             <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//                 <h1 className="text-3xl font-bold mb-4">Simple Counter App</h1>
//                 <div className="text-5xl font-semibold mb-6">{count}</div>
//                 <div className="flex space-x-4">
//                     <button
//                         onClick={decrement}
//                         className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
//                     >
//                         Decrement
//                     </button>
//                     <button
//                         onClick={reset}
//                         className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600"
//                     >
//                         Reset
//                     </button>
//                     <button
//                         onClick={increment}
//                         className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
//                     >
//                         Increment
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }






// import React, { useState } from 'react';
// // import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
// import {Card} from "@mui/material"
// import { CardContent } from '@mui/material';
// import {Typography} from '@mui/material';
// import {Button} from '@mui/material';
// import {CardActions} from '@mui/material';
// export default function CounterApp() {
//     const [count, setCount] = useState(0);

//     return (
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
//             <Card style={{ width: 300, padding: '20px', textAlign: 'center' }}>
//                 <CardContent>
//                     <Typography variant="h5" component="div" gutterBottom>
//                         Counter App
//                     </Typography>
//                     <Typography variant="h6" component="p" gutterBottom>
//                         Current Count: {count}
//                     </Typography>
//                 </CardContent>
//                 <CardActions style={{ justifyContent: 'center' }}>
//                     <Button variant="contained" color="error" onClick={() => setCount(count - 1)}>
//                         -
//                     </Button>
//                     <Button variant="outlined" onClick={() => setCount(0)}>
//                         Reset
//                     </Button>
//                     <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
//                         +
//                     </Button>
//                 </CardActions>
//             </Card>
//         </div>
//     );
// }












import React, { useState } from "react";
import './counter-app.css';

export default function CounterApp() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="app-container">
            <div className="card">
                <h1 className="title">Simple Counter App</h1>
                <div className="count-display">Count: {count}</div>
                <div className="button-group">
                    <button onClick={decrement} className="button decrement">Decrement</button>
                    <button onClick={reset} className="button reset">Reset</button>
                    <button onClick={increment} className="button increment">Increment</button>
                </div>
            </div>
        </div>
    );
}
