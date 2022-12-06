import * as React from 'react';
import Container from '@mui/material/Container';
import './Page.css'


import Box from '@mui/material/Box';
  
export const Page=()=> {
  return (
    
   
         
        <React.Fragment>

      <Container>
      <Box sx={{mt: 8,mb:2,fontWeight: 'bold' }}>
      <div>Following approvals are required to onboard to Non Prod environment dd</div>
      </Box>
      

      
      
      <Box sx={{ boxShadow: '0 8px 17px 3px rgb(0 0 0 / 6%)',backgroundColor: '#fff',p:3}}>
      <div><b>Budget approval $121 CAD monthly</b>
      <Box sx={{ textTransform:'uppercase',float:'right'}}>Pending</Box><br/>Assigned to: Jonathan Chan(L5)</div>
      </Box>
      

      <Box sx={{ mt:3}}>
      
      <Box sx={{ boxShadow: '0 8px 17px 3px rgb(0 0 0 / 6%)',backgroundColor: '#fff',p:3}}>
      <div><b><span className="terms">Terms and conditions acceptance</span></b>
      <Box sx={{ textTransform:'uppercase',float:'right',color:'#f02816'}}>Reject <span className='approved'>Mark Approved</span></Box><br/>Assigned to: Jonathan Chan(L5)</div>
      </Box>
      
      </Box>
      
      <Box sx={{mt:3}}>
      
      <Box sx={{ boxShadow: '0 8px 17px 3px rgb(0 0 0 / 6%)',backgroundColor: '#fff',p:3}}>
      <div><b><span className='data'>Data steward attestation</span></b>
      <Box sx={{ textTransform:'uppercase',float:'right'}}>Approved</Box><br/>Assigned to: Cloud team(L5)</div>
      </Box>
     
      </Box>
      
     
      <Box sx={{mt:3}}>
     
      <Box sx={{ boxShadow: '0 8px 17px 3px rgb(0 0 0 / 6%)',backgroundColor: '#fff',p:3,textTransform:'uppercase',fontWeight: 'bold'}}>
      <div>Jira Service Ticket
        <Box sx={{float:'right',textTransform:'uppercase'}}>Pending</Box>
      </div>
      </Box>
      
      </Box>
      

      <Box sx={{mt:3}}>
      
      <Box sx={{ boxShadow: '0 8px 17px 3px rgb(0 0 0 / 6%)',backgroundColor: '#fff',p:3,textTransform:'uppercase',fontWeight: 'bold'}}>
      <div>Jira Service Ticket
        <Box sx={{float:'right',textTransform:'uppercase'}}>Pending</Box>
      </div>
      </Box>
     
      </Box>
      </Container>

    </React.Fragment>
    

    
  );
}