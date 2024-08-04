const express = require('express');
const cors = require('cors');
const app = express();

// Configurations

    require('./database'); // Improved database connection handling
    const port = process.env.PORT || 5600;

// Middleware
const corsOptions = require('./middleware/corsOptions');
app.use(cors(corsOptions));
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
app.use(userRoutes);
app.use(productRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
