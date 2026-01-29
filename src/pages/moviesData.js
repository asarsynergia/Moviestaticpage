// src/data/moviesData.js

export const moviesData = [
  {
    id: 1,
    title: 'Lokah Chapter 1: Chandra',
    distribution: 'Theatrical & VOD',
    region: 'North America',
    status: 'In Production',
    tagline: 'Experience the thrill of a lifetime',
    releaseDate: 'Q2 2025',
    director: 'Jiyen Krishnakumar',
    genre: 'Action, Drama',
    budget: 12500000,
    progress: 75,
    images: [
      'https://i.ytimg.com/vi/uwfeRKhr7Io/maxresdefault.jpg',
      'https://i.ytimg.com/vi/u1Pz6OVZ5js/maxresdefault.jpg',
      'https://media.assettype.com/homegrown%2F2025-09-05%2Ft3ceubz2%2FLokahChapter1ChandraWayfarerFilms.png',
    ],
    get image() {
      return this.images[0];
    },
    financials: {
      totalRevenue: 28400000,
      previousRevenue: 27000000,
      theaterSharePercent: 50,
      producerSharePercent: 30,
      distributorSharePercent: 20,
      productionCost: 6500000,
      marketingCost: 2500000,
      transportationCost: 800000,
      flightsCost: 450000,
      securityCost: 300000,
      legalCost: 200000,
      mgRecovery: 'Recovered',
      mgRecoveryPercent: 100,
      // Direct net profit value for accurate display
      calculatedNetProfit: 8200000,
    },
    get revenue() {
      return this.financials.totalRevenue;
    },
    get netProfit() {
      return this.financials.calculatedNetProfit;
    },
    get totalExpenses() {
      return this.financials.productionCost + 
        this.financials.marketingCost + 
        this.financials.transportationCost + 
        this.financials.flightsCost + 
        this.financials.securityCost + 
        this.financials.legalCost;
    },
    timeline: {
      loiSigning: { date: 'Jan 15, 2023', status: 'Completed' },
      rightsAcquisition: { date: 'Feb 01, 2023', status: 'Completed' },
      settlements: { date: 'Ongoing', status: 'In Progress' },
      finalClosure: { date: 'Q2 2025', status: 'Pending' },
    },
    legal: {
      censorCertificate: 'Approved',
      satelliteAuthorization: 'Pending',
      distributionRights: 'Approved',
    },
    documents: {
      contracts: 12,
      expenseBills: 48,
      legalDocuments: 8,
      reports: 15,
    },
  },
  {
    id: 2,
    title: 'Thudarum',
    distribution: 'Theatrical',
    region: 'India',
    status: 'Post-Production',
    tagline: 'The journey continues...',
    releaseDate: 'Q1 2025',
    director: 'Tharun Moorthy',
    genre: 'Drama, Action',
    budget: 8200000,
    progress: 90,
    images: [
      'https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/51/1754975720051-i',
      'https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2025/4/7/thudarum-mohanlal.jpg?w=1120&h=583',
      'https://images.timesnownews.com/thumb/msid-151590723,width-1280,height-720,resizemode-75/151590723.jpg',
    ],
    get image() {
      return this.images[0];
    },
    financials: {
      totalRevenue: 18600000,
      previousRevenue: 17850000,
      theaterSharePercent: 50,
      producerSharePercent: 30,
      distributorSharePercent: 20,
      productionCost: 4200000,
      marketingCost: 1800000,
      transportationCost: 400000,
      flightsCost: 250000,
      securityCost: 200000,
      legalCost: 150000,
      mgRecovery: 'On Track',
      mgRecoveryPercent: 75,
      calculatedNetProfit: 5400000,
    },
    get revenue() {
      return this.financials.totalRevenue;
    },
    get netProfit() {
      return this.financials.calculatedNetProfit;
    },
    get totalExpenses() {
      return this.financials.productionCost + 
        this.financials.marketingCost + 
        this.financials.transportationCost + 
        this.financials.flightsCost + 
        this.financials.securityCost + 
        this.financials.legalCost;
    },
    timeline: {
      loiSigning: { date: 'Mar 10, 2023', status: 'Completed' },
      rightsAcquisition: { date: 'Apr 15, 2023', status: 'Completed' },
      settlements: { date: 'Ongoing', status: 'In Progress' },
      finalClosure: { date: 'Q1 2025', status: 'Pending' },
    },
    legal: {
      censorCertificate: 'Approved',
      satelliteAuthorization: 'Approved',
      distributionRights: 'Approved',
    },
    documents: {
      contracts: 8,
      expenseBills: 35,
      legalDocuments: 6,
      reports: 12,
    },
  },
  {
    id: 3,
    title: 'F1',
    distribution: 'Theatrical & IMAX',
    region: 'Global',
    status: 'In Production',
    tagline: 'Speed. Glory. Sacrifice.',
    releaseDate: 'Q3 2025',
    director: 'Joseph Kosinski',
    genre: 'Action, Sports',
    budget: 140000000,
    progress: 65,
    images: [
      'https://davidegates.com/wp-content/uploads/2025/07/f1-the-movie-2025-06-28-11-45-08.png',
      'https://images.unsplash.com/photo-1541447271487-09612b3f49f7?w=1200',
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200',
    ],
    get image() {
      return this.images[0];
    },
    financials: {
      totalRevenue: 320000000,
      previousRevenue: 300000000,
      theaterSharePercent: 50,
      producerSharePercent: 30,
      distributorSharePercent: 20,
      productionCost: 45000000,
      marketingCost: 18000000,
      transportationCost: 3000000,
      flightsCost: 2000000,
      securityCost: 1500000,
      legalCost: 500000,
      mgRecovery: 'Recovered',
      mgRecoveryPercent: 100,
      calculatedNetProfit: 85000000,
    },
    get revenue() {
      return this.financials.totalRevenue;
    },
    get netProfit() {
      return this.financials.calculatedNetProfit;
    },
    get totalExpenses() {
      return this.financials.productionCost + 
        this.financials.marketingCost + 
        this.financials.transportationCost + 
        this.financials.flightsCost + 
        this.financials.securityCost + 
        this.financials.legalCost;
    },
    timeline: {
      loiSigning: { date: 'Jun 01, 2023', status: 'Completed' },
      rightsAcquisition: { date: 'Jul 15, 2023', status: 'Completed' },
      settlements: { date: 'Ongoing', status: 'In Progress' },
      finalClosure: { date: 'Q3 2025', status: 'Pending' },
    },
    legal: {
      censorCertificate: 'Approved',
      satelliteAuthorization: 'Pending',
      distributionRights: 'Approved',
    },
    documents: {
      contracts: 25,
      expenseBills: 120,
      legalDocuments: 18,
      reports: 32,
    },
  },
  
    {
    id: 4,
    title: 'Kalamkaval',
    distribution: 'Theatrical',
    region: 'Middle East',
    status: 'Pre-Production',
    tagline: 'Where legends are born',
    releaseDate: 'Q4 2025',
    director: 'Sandeep Reddy Vanga',
    genre: 'Crime, Thriller',
    budget: 25000000,
    progress: 25,
    images: [
      'https://images.filmibeat.com/img/popcorn/movie_lists/kalamkaval-ott-release-mammoottys-latest-crime-thriller-arriving-soon-on-sonyliv-20251208155814-6910.jpg',
      'https://assets-in.bmscdn.com/discovery-catalog/events/et00468439-mjulncveyb-landscape.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaTYJVoIoBQ3B4e7DLXBNIKEtQIqE3p11MQ&s',
    ],
    get image() {
      return this.images[0];
    },
    financials: {
      totalRevenue: 42000000,
      previousRevenue: 40000000,
      theaterSharePercent: 50,
      producerSharePercent: 30,
      distributorSharePercent: 20,
      productionCost: 5000000,
      marketingCost: 2500000,
      transportationCost: 800000,
      flightsCost: 500000,
      securityCost: 400000,
      legalCost: 200000,
      mgRecovery: 'On Track',
      mgRecoveryPercent: 65,
      calculatedNetProfit: 12000000,
    },
    get revenue() {
      return this.financials.totalRevenue;
    },
    get netProfit() {
      return this.financials.calculatedNetProfit;
    },
    get totalExpenses() {
      return this.financials.productionCost + 
        this.financials.marketingCost + 
        this.financials.transportationCost + 
        this.financials.flightsCost + 
        this.financials.securityCost + 
        this.financials.legalCost;
    },
    timeline: {
      loiSigning: { date: 'Sep 01, 2023', status: 'Completed' },
      rightsAcquisition: { date: 'Oct 15, 2023', status: 'Completed' },
      settlements: { date: 'Pending', status: 'Pending' },
      finalClosure: { date: 'Q4 2025', status: 'Pending' },
    },
    legal: {
      censorCertificate: 'Pending',
      satelliteAuthorization: 'Pending',
      distributionRights: 'Approved',
    },
    documents: {
      contracts: 10,
      expenseBills: 28,
      legalDocuments: 5,
      reports: 8,
    },
  },
];

// Helper function to get movie by ID
export const getMovieById = (id) => {
  return moviesData.find(movie => movie.id === parseInt(id)) || moviesData[0];
};

// Helper function to get movies by status
export const getMoviesByStatus = (status) => {
  if (status === 'All') return moviesData;
  return moviesData.filter(movie => movie.status === status);
};

// Helper function to get status counts
export const getStatusCounts = () => {
  const counts = {
    'All': moviesData.length,
    'In Production': 0,
    'Post-Production': 0,
    'Pre-Production': 0,
    'Development': 0,
  };
  
  moviesData.forEach(movie => {
    if (counts.hasOwnProperty(movie.status)) {
      counts[movie.status]++;
    }
  });
  
  return counts;
};

// Helper function to calculate portfolio stats
export const getPortfolioStats = () => {
  const totalBudget = moviesData.reduce((sum, movie) => sum + movie.budget, 0);
  const totalRevenue = moviesData.reduce((sum, movie) => sum + movie.revenue, 0);
  const totalProfit = moviesData.reduce((sum, movie) => sum + movie.netProfit, 0);
  const avgProgress = Math.round(moviesData.reduce((sum, movie) => sum + movie.progress, 0) / moviesData.length);
  const profitableCount = moviesData.filter(m => m.netProfit > 0).length;
  
  return {
    totalBudget,
    totalRevenue,
    totalProfit,
    avgProgress,
    profitableCount,
    totalMovies: moviesData.length,
    roi: totalBudget > 0 ? ((totalProfit / totalBudget) * 100) : 0,
    revenueVsBudget: totalBudget > 0 ? ((totalRevenue / totalBudget) * 100) : 0,
  };
};

// Status list for filters
export const statusList = ['All', 'In Production', 'Post-Production', 'Pre-Production', 'Development'];

// Format currency helper
export const formatCurrency = (value) => {
  const absValue = Math.abs(value);
  if (absValue >= 1000000) {
    return `AED ${(absValue / 1000000).toFixed(1)}M`;
  } else if (absValue >= 1000) {
    return `AED ${(absValue / 1000).toFixed(0)}K`;
  }
  return `AED ${absValue.toLocaleString()}`;
};

// Calculate percentage change - always positive
export const calcPercentage = (current, previous) => {
  if (previous === 0) return { value: '+0%', isPositive: true };
  const change = ((current - previous) / previous) * 100;
  return {
    value: `+${Math.abs(change).toFixed(1)}%`,
    isPositive: change >= 0
  };
};

// Calculate derived metrics from financials
export const calculateMetrics = (financials) => {
  const {
    totalRevenue,
    previousRevenue,
    theaterSharePercent,
    producerSharePercent,
    distributorSharePercent,
    productionCost,
    marketingCost,
    transportationCost,
    flightsCost,
    securityCost,
    legalCost,
    mgRecovery,
    mgRecoveryPercent,
    calculatedNetProfit
  } = financials;

  const theaterShare = totalRevenue * (theaterSharePercent / 100);
  const netSettlement = totalRevenue - theaterShare;
  const producerShare = netSettlement * (producerSharePercent / 100);
  const distributorShare = netSettlement * (distributorSharePercent / 100);
  const totalExpenses = productionCost + marketingCost + transportationCost + flightsCost + securityCost + legalCost;
  
  // Use the pre-calculated net profit value
  const netProfit = calculatedNetProfit || 0;
  const grossProfitPercent = totalRevenue > 0 ? ((totalRevenue - theaterShare) / totalRevenue) * 100 : 0;

  const prevTheaterShare = previousRevenue * (theaterSharePercent / 100);
  const prevNetSettlement = previousRevenue - prevTheaterShare;
  const prevProducerShare = prevNetSettlement * (producerSharePercent / 100);
  const prevDistributorShare = prevNetSettlement * (distributorSharePercent / 100);
  const prevTotalExpenses = totalExpenses * 0.95;
  const prevNetProfit = netProfit * 0.92; // Previous profit was 8% less
  const prevGrossProfitPercent = previousRevenue > 0 ? ((previousRevenue - prevTheaterShare) / previousRevenue) * 100 : 0;

  const isInProfit = netProfit > 0;

  return {
    totalRevenue,
    theaterShare,
    netSettlement,
    producerShare,
    distributorShare,
    totalExpenses,
    netProfit,
    grossProfitPercent,
    mgRecovery,
    mgRecoveryPercent,
    isInProfit,
    expenses: {
      production: productionCost,
      marketing: marketingCost,
      transportation: transportationCost,
      flights: flightsCost,
      security: securityCost,
      legal: legalCost
    },
    changes: {
      revenue: calcPercentage(totalRevenue, previousRevenue),
      theaterShare: calcPercentage(theaterShare, prevTheaterShare),
      producerShare: calcPercentage(producerShare, prevProducerShare),
      distributorShare: calcPercentage(distributorShare, prevDistributorShare),
      expenses: calcPercentage(totalExpenses, prevTotalExpenses),
      netProfit: calcPercentage(netProfit, prevNetProfit),
      grossProfit: calcPercentage(grossProfitPercent, prevGrossProfitPercent)
    }
  };
};