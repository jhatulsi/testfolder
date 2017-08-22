-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 22, 2017 at 02:32 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommsite`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `brand_id` int(10) NOT NULL,
  `brand_title` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`brand_id`, `brand_title`) VALUES
(1, 'jacket'),
(2, 'boot'),
(3, 'belt');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `p_id` int(10) NOT NULL,
  `ip_add` int(10) NOT NULL,
  `qty` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`p_id`, `ip_add`, `qty`) VALUES
(2, 1, 0),
(7, 1, 0),
(1, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `cat_id` int(10) NOT NULL,
  `cat_title` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`cat_id`, `cat_title`) VALUES
(1, 'jacket'),
(2, 'boot'),
(3, 'belt'),
(4, 'JEANS'),
(5, 'SHIRT');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(10) NOT NULL,
  `cat_id` int(10) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `product_title` text NOT NULL,
  `product_keywords` text NOT NULL,
  `product_price` int(100) NOT NULL,
  `product_desc` text NOT NULL,
  `product_image` text NOT NULL,
  `status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `cat_id`, `date`, `product_title`, `product_keywords`, `product_price`, `product_desc`, `product_image`, `status`) VALUES
(1, 1, '2017-08-21 15:21:49', 'jacket', 'SPORT LEATHER JACKET', 17, 'A beautiful SPORT LEATHER JACKET.', 'thumbnail3d3b.png', 'on'),
(2, 4, '2017-08-21 15:48:32', 'jacket', 'RETRO MATE LEATHER CUT', 25, 'A beautiful RETRO MATE LEATHER CUT jacket.', 'thumbnail5843.png', 'on'),
(3, 1, '2017-08-21 15:22:00', 'jacket', 'SPORT LEATHER JACKET', 17, 'A beautiful SPORT LEATHER JACKET.', 'thumbnaile6e7.png', 'on'),
(4, 4, '2017-08-21 15:48:13', 'jacket', 'RETRO MATE LEATHER CUT', 25, 'A beautiful RETRO MATE LEATHER CUT jacket.', 'thumbnail5843.png', 'on'),
(5, 2, '2017-08-21 15:22:26', 'boot', 'Heavy Duty Leather Boots', 13, 'A new Heavy Duty Leather Boots.', 'thumbnailffb9.png', 'on'),
(6, 2, '2017-08-21 15:22:36', 'boot', 'Heavy Duty Leather Boots', 13, 'A new Heavy Duty Leather Boots.', 'thumbnailffb9.png', 'on'),
(7, 3, '2017-08-21 15:22:52', 'belt', 'Mirage Black Leather Belt', 13, 'A beautiful Mirage Black Leather Belt.', 'thumbnail32f1.png', 'on'),
(8, 5, '2017-08-22 12:17:13', 'SHIRT', 'Printed Shirt', 34, 'A New Printed Shirt', 'Penguins.jpg', 'on'),
(9, 0, '0000-00-00 00:00:00', '', 'Denim Jeans', 50, 'Accidental Jeans', 'Desert.jpg', 'on'),
(10, 0, '2017-08-22 12:28:02', '4', 'colorful Jeans', 45, 'A colorful attractive Jeans', 'Jellyfish.jpg', 'on');

-- --------------------------------------------------------

--
-- Table structure for table `products_color`
--

CREATE TABLE `products_color` (
  `color_id` int(10) NOT NULL,
  `product_id` int(10) NOT NULL,
  `product_color` varchar(100) NOT NULL,
  `product_image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products_color`
--

INSERT INTO `products_color` (`color_id`, `product_id`, `product_color`, `product_image`) VALUES
(1, 1, 'Black', 'thumbnail3d3b.png'),
(2, 1, 'Red', 'thumbnail3d3b.png'),
(3, 2, 'Black', 'thumbnail5843.png'),
(4, 2, 'Greeen6', 'thumbnail5843.png'),
(5, 4, 'Black', 'thumbnail5843.png'),
(6, 4, 'Blue', 'thumbnail5843.png'),
(7, 5, 'Black', 'thumbnailffb9.png'),
(8, 5, 'Pink', 'thumbnailffb9.png');

-- --------------------------------------------------------

--
-- Table structure for table `shipping`
--

CREATE TABLE `shipping` (
  `billing_id` int(10) NOT NULL,
  `billing_firstname` text NOT NULL,
  `billing_lastname` text NOT NULL,
  `billing_company` text NOT NULL,
  `billing_phone` text NOT NULL,
  `billing_address` text NOT NULL,
  `billing_city` text NOT NULL,
  `billing_country` text NOT NULL,
  `billing_state` text NOT NULL,
  `billing_zip` int(100) NOT NULL,
  `billing_email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shipping`
--

INSERT INTO `shipping` (`billing_id`, `billing_firstname`, `billing_lastname`, `billing_company`, `billing_phone`, `billing_address`, `billing_city`, `billing_country`, `billing_state`, `billing_zip`, `billing_email`, `password`) VALUES
(1, 'tulsi', 'jha', 'my company', '987654321', 'my address', 'delhi', 'india', 'delhi', 800008, 'tulsi@gmail.com', 'tulsi');

-- --------------------------------------------------------

--
-- Table structure for table `size_tb`
--

CREATE TABLE `size_tb` (
  `size_id` int(10) NOT NULL,
  `product_id` int(50) NOT NULL,
  `color_id` int(50) NOT NULL,
  `product_size` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `size_tb`
--

INSERT INTO `size_tb` (`size_id`, `product_id`, `color_id`, `product_size`) VALUES
(1, 1, 1, 'XL'),
(2, 2, 3, 'L'),
(3, 1, 1, 'Small'),
(4, 1, 1, 'Medium'),
(5, 2, 2, 'Medium'),
(6, 2, 2, 'Small'),
(7, 5, 4, 'Small'),
(8, 5, 4, 'small'),
(9, 6, 4, 'L'),
(10, 6, 4, 'small'),
(11, 8, 5, 'XL');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`brand_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `products_color`
--
ALTER TABLE `products_color`
  ADD PRIMARY KEY (`color_id`);

--
-- Indexes for table `shipping`
--
ALTER TABLE `shipping`
  ADD PRIMARY KEY (`billing_id`);

--
-- Indexes for table `size_tb`
--
ALTER TABLE `size_tb`
  ADD PRIMARY KEY (`size_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `brand_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `cat_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `products_color`
--
ALTER TABLE `products_color`
  MODIFY `color_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `shipping`
--
ALTER TABLE `shipping`
  MODIFY `billing_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `size_tb`
--
ALTER TABLE `size_tb`
  MODIFY `size_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
