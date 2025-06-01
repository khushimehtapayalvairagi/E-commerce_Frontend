import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import PaidIcon from '@mui/icons-material/Paid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from "@mui/material";
const salesData=[
    {
        stats:"245k",
        title:"Sales",
        color:"primary",
        icon:<TrendingUpIcon sx={{fontSize:"1.75rem"}}/>

    },
        {
        stats:"12.5k",
        title:"Customer",
        color:"success",
        icon:<AccountCircleIcon sx={{fontSize:"1.75rem"}}/>

    },
        {
        stats:"2.54k",

        title:"Products",
        color:"warning",
        icon:<SettingsCellIcon sx={{fontSize:"1.75rem"}}/>

    },
        {
        stats:"88k",
        title:"Revenue",
        color:"info",
        icon:<PaidIcon sx={{fontSize:"1.75rem"}}/>

    }
]
const renderState=()=>{
    return salesData.map((item,index)=>{
 
 return(
 <Grid item xs={12} sm={3} key={index}>
    <Box  sx={{
        display:"flex",
        alignItems:"center"
    }}>
        <Avatar variant="rounded" sx={{
            mr:2,
            width:40,
            height:40,
            boxShadow:"3",
            color:"white",
           bgcolor: "green"

        }}>
            {item.icon}
          
        </Avatar>


        <Box sx={{
            display:"flex",
            flexDirection:"column",
           }}>
            <Typography variant="caption">  {item.title}  </Typography>
            <Typography variant="h6">{item.stats}</Typography>
        </Box>

    </Box>

  </Grid>
 )
    })
}

const MonthlyOverView=()=>{
return(
  <Card >
    <CardHeader sx={{ml:-25}} title="monthly Overview"
     action={
        <IconButton size="small" >
            <MoreVertIcon/>
        </IconButton>
     }
     subheader={
        <Typography variant="body2">
            <Box component="span" sx={{fontHeight:600, ml:2 ,color:"white"}}>
                total.48.5% groth </Box>
            this month

        </Typography>
     }
     titleTypographyProps={{
        sx:{
            mb:2.5,
            lineHeight:"2rem  !important ",
            letterSpacing:".15px ! important"
        }
     }}
    
    />
    <CardContent sx={{
        pt:theme=>`${theme.spacing(3)} |important`   }}>
    <Grid container spacing={[5,0]}>
     {renderState()}
    </Grid>
    </CardContent>
          
  </Card>
)


}
export default  MonthlyOverView;