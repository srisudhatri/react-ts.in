// import * as React from 'react';


// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import Container from '@mui/material/Container';

// import './Home.css'
// export const Home=()=> {


//   const myStyle = {
//     boxShadow: '0 8px 17px 3px rgb(0 0 0 / 6%)',
//     backgroundColor: '#fff',
//     padding:30,
//     fontFamily: "Sans-Serif",
//     margin:20,
    
//   };
 
  
//   return (
//     <div style={{marginTop:60}} >
//       <Container style={{overflowY:'scroll'}}>
      
//       <Box style={myStyle}>
//       <div><b>123Budget approval $121 CAD monthly</b>
//       <Box sx={{ textTransform:'uppercase',float:'right'}}>Pending</Box><br/>Assigned to: Jonathan Chan(L5)</div>
//       </Box>


//       <Box style={myStyle}>
//       <div><b>123Budget approval $121 CAD monthly</b>
//       <Box sx={{ textTransform:'uppercase',float:'right'}}>Pending</Box><br/>Assigned to: Jonathan Chan(L5)</div>
//       </Box>
//       <Box style={myStyle}>
//       <div><b>123Budget approval $121 CAD monthly</b>
//       <Box sx={{ textTransform:'uppercase',float:'right'}}>Pending</Box><br/>Assigned to: Jonathan Chan(L5)</div>
//       </Box>
      
//       <Box style={myStyle}>
//       <div><b>123Budget approval $121 CAD monthly</b>
//       <Box sx={{ textTransform:'uppercase',float:'right'}}>Pending</Box><br/>Assigned to: Jonathan Chan(L5)</div>
//       </Box>
      
      
//     </Container>
//     </div>
//   );
// }


import * as React from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export const  Home=()=> {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">Responsive h3</Typography>
        <Typography variant="h4">Responsive h4</Typography>
        <Typography variant="h5">Responsive h5</Typography>
      </ThemeProvider>

      <ThemeProvider theme={theme}>
        <Typography variant="h3">Responsive h3</Typography>
        <Typography variant="h4">Responsive h4</Typography>
        <Typography variant="h5">Responsive h5</Typography>
      </ThemeProvider>
    </div>


  );
}