const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Gestion des stocks



app.post('/addColis', async (req, res) => {
  try {
    const data = await prisma.package.create({
      data: {
        address: req.body.address,
        weight: req.body.weight,
        destination: req.body.destination,
        stockId: req.body.stockId,
      },
    });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la création du colis' });
  }
});

// Suivi de colis par rapport à un id
app.get('/colis/:id', async (req, res) => {
  const data = await prisma.package.findUnique({
    where: { id: Number(req.params.id) },
  });
  res.json(data);
});

app.get('/stocks', async (req, res) => {
  const stocks = await prisma.stock.findMany();
  res.json(stocks);
});


app.get('/colis', async (req, res) => {
  const stocks = await prisma.package.findMany();
  res.json(stocks);
});

app.post('/addStock', async (req, res) => {
  try {
    const data = await prisma.stock.create({
      data: {
        name: req.body.name,
        capacity: req.body.stock,
      },
    });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la création du stock' });
  }
});

app.get('/stock/:id', async (req, res) => {
  const data = await prisma.stock.findUnique({
    where: { id: Number(req.params.id) },
    include: { packages: true },
  });
  res.json(data);
});

app.listen(3000, () => console.log('Server running on port 3000'));