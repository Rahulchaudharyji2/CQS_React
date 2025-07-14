import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
    const { id } = useParams();
    const [product ,setProduct]=useState([])
    const [indegredents,setIndegredents]=useState([])
    const [instruction,setInstruction]= useState([])
    const [mealType,setMealType]= useState([])
    useEffect(()=>{const pwandeep=async ()=>{
        try {
            const response= await fetch(`https://dummyjson.com/recipes/${id}`);
            const data=await response.json();
            console.log(data)
            setProduct(data)
            setIndegredents(data.ingredients)
            console.log(data.ingredients)
            setInstruction(data.instructions)
            console.log(data.mealType)
setMealType(data.mealType)
           
        } catch (error) {
            console.log(error)
        }
       console.log("I am function")
     }
     pwandeep();
      },[])

    

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        p: 4,
        bgcolor: "#f4f6f8",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Product Image */}
      <Card
        sx={{
          maxWidth: 500,
          borderRadius: 3,
          boxShadow: 4,
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt="Cheeseburger"
          sx={{ height: 300, objectFit: "cover" }}
        />
      </Card>

      {/* Product Details */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
        {product.name}
        </Typography>
        <Typography variant="h4" fontWeight={600} gutterBottom>
        Meal Type :{mealType}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Prep Time: {product.prepTimeMinutes}
        </Typography>

        {/* Ingredients Section */}
        <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Ingredients
            </Typography>
            <List dense>
              {indegredents.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemText primary={`• ${item}`} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        {/* Instructions Section */}
        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Instructions
            </Typography>
            <List dense>
              {instruction.map((step, index) => (
                <ListItem key={index} alignItems="flex-start">
                  <ListItemText
                    primary={`Step ${index + 1}`}
                    secondary={step}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ProductDetails;
