-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 05, 2017 at 02:24 PM
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
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(50) NOT NULL,
  `email` varchar(111) NOT NULL,
  `password` varchar(111) NOT NULL,
  `is_active` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `email`, `password`, `is_active`) VALUES
(1, 'tulsi@gmail.com', 'tulsi', 1),
(2, 'tulsi@gmail.com', 'tulsi', 1),
(3, 'admin@gmail.com', 'admin', 1);

-- --------------------------------------------------------

--
-- Table structure for table `admin_profile`
--

CREATE TABLE `admin_profile` (
  `profile_image` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_profile`
--

INSERT INTO `admin_profile` (`profile_image`) VALUES
('Penguins.jpg');

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
(3, 1, 0),
(1, 1, 0),
(10, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `cat_id` int(10) NOT NULL,
  `vendor_id` int(100) NOT NULL,
  `cat_title` text NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`cat_id`, `vendor_id`, `cat_title`, `status`) VALUES
(1, 0, 'jacket', 'on'),
(2, 0, 'boot', 'on'),
(3, 0, 'belt', 'on'),
(4, 0, 'Jeans', 'disapproved'),
(5, 0, 'Shirt', 'on'),
(6, 0, 'Top', 'on');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(10) NOT NULL,
  `customer_name` varchar(100) NOT NULL,
  `customer_email` varchar(100) NOT NULL,
  `customer_pass` varchar(100) NOT NULL,
  `customer_country` text NOT NULL,
  `customer_city` text NOT NULL,
  `customer_contact` int(100) NOT NULL,
  `customer_address` text NOT NULL,
  `c_state` text NOT NULL,
  `c_zip` text NOT NULL,
  `customer_image` text NOT NULL,
  `customer_ip` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_id`, `customer_name`, `customer_email`, `customer_pass`, `customer_country`, `customer_city`, `customer_contact`, `customer_address`, `c_state`, `c_zip`, `customer_image`, `customer_ip`) VALUES
(1, 'tulsi', 'tulsi@gmail.com', 'tulsi', 'india', 'delhi', 123456789, 'my address', 'delhi', '800008', 'Koala.jpeg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `pending_order`
--

CREATE TABLE `pending_order` (
  `order_id` int(10) NOT NULL,
  `customer_id` int(10) NOT NULL,
  `invoice_no` int(10) NOT NULL,
  `product_id` int(10) NOT NULL,
  `qty` int(10) NOT NULL,
  `order_status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pending_order`
--

INSERT INTO `pending_order` (`order_id`, `customer_id`, `invoice_no`, `product_id`, `qty`, `order_status`) VALUES
(0, 1, 31246294, 3, 1, 'complete');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(10) NOT NULL,
  `cat_id` int(10) NOT NULL,
  `vendor_id` int(50) NOT NULL,
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

INSERT INTO `products` (`product_id`, `cat_id`, `vendor_id`, `date`, `product_title`, `product_keywords`, `product_price`, `product_desc`, `product_image`, `status`) VALUES
(3, 1, 0, '2017-08-21 15:22:00', 'jacket', 'SPORT LEATHER JACKET', 17, 'A beautiful SPORT LEATHER JACKET.', 'thumbnaile6e7.png', 'on'),
(4, 4, 0, '2017-08-26 06:58:10', 'jacket', 'RETRO MATE LEATHER CUT', 25, 'A beautiful RETRO MATE LEATHER CUT jacket.', 'thumbnail5843.png', 'disapproved'),
(5, 2, 0, '2017-08-21 15:22:26', 'boot', 'Heavy Duty Leather Boots', 13, 'A new Heavy Duty Leather Boots.', 'thumbnailffb9.png', 'on'),
(6, 2, 0, '2017-09-05 06:16:40', 'BOOT', 'Heavy Duty Leather Boots', 45, 'A new Heavy Duty Leather Boots.', '', 'on'),
(8, 5, 0, '2017-08-25 10:36:18', 'SHIRT', 'Printed Shirt', 34, 'A New Printed Shirt', 'Penguins.jpg', 'on'),
(9, 0, 0, '0000-00-00 00:00:00', '', 'Denim Jeans', 50, 'Accidental Jeans', 'Desert.jpg', 'on'),
(11, 4, 0, '2017-08-26 06:58:10', 'JEANS', 'New jeans', 34, 'A colorful attractive Jeans', 'Jellyfish.jpg', 'disapproved'),
(12, 6, 0, '2017-08-25 10:37:29', 'TOP', 'fancy  top', 25, 'A colorful attractive top', 'Tulips.jpg', 'disapproved'),
(13, 4, 0, '2017-08-26 06:58:10', 'JEANS', 'accidental Denim Jeans', 70, 'A New Printed jeans', 'Hydrangeas.jpg', 'disapproved'),
(14, 4, 0, '2017-08-26 06:58:10', 'JEANS', 'accidental Denim Jeans', 70, 'A New Printed jeans', 'Jellyfish.jpg', 'disapproved'),
(15, 6, 0, '2017-08-25 05:49:12', 'TOP', 'fancy printed top', 55, 'a new fancy printed top', 'Chrysanthemum.jpg', 'on'),
(16, 6, 0, '2017-08-24 07:49:09', 'TOP', 'fancy printed top', 25, 'A colorful attractive top', 'Jellyfish.jpg', 'on'),
(17, 4, 0, '2017-08-26 06:58:10', 'JEANS', 'jeans from vendor', 44, 'new jeans', 'Jellyfish.jpg', 'disapproved'),
(18, 2, 0, '2017-08-25 10:29:15', 'Boot', 'Leather Boot', 44, 'a new fancy boot', 'Jellyfish.jpg', 'on'),
(19, 3, 0, '2017-08-25 10:31:39', 'belt', 'leather belt', 10, 'A colorful attractive belt', 'Lighthouse.jpg', 'on'),
(21, 4, 6, '2017-09-01 11:37:16', 'JEANS', 'New Denim Jeans', 25, 'A New Printed jeans', 'Tulips.jpg', 'off'),
(22, 4, 1, '2017-09-04 10:38:32', 'JEANS', ' Denim Jeans', 65, 'A colorful attractive Jeans', 'Chrysanthemum.jpg', 'off');

-- --------------------------------------------------------

--
-- Table structure for table `products_color`
--

CREATE TABLE `products_color` (
  `color_id` int(10) NOT NULL,
  `product_id` int(10) NOT NULL,
  `vendor_id` int(100) NOT NULL,
  `product_color` varchar(100) NOT NULL,
  `product_image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products_color`
--

INSERT INTO `products_color` (`color_id`, `product_id`, `vendor_id`, `product_color`, `product_image`) VALUES
(1, 1, 0, 'Black', 'thumbnail3d3b.png'),
(2, 1, 0, 'Red', 'thumbnail3d3b.png'),
(3, 2, 0, 'Black', 'thumbnail5843.png'),
(4, 2, 0, 'Greeen6', 'thumbnail5843.png'),
(5, 4, 0, 'Black', 'thumbnail5843.png'),
(6, 4, 0, 'Blue', 'thumbnail5843.png'),
(7, 5, 0, 'Black', 'thumbnailffb9.png'),
(8, 5, 0, 'Pink', 'thumbnailffb9.png'),
(9, 16, 0, 'Yellow', ''),
(10, 16, 0, 'Yellow', ''),
(11, 16, 0, 'Blue', ''),
(13, 16, 0, 'Green', 'Jellyfish.jpg'),
(14, 21, 6, 'Blue', 'Jellyfish.jpg');

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
  `password` varchar(100) NOT NULL,
  `billing_ip` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shipping`
--

INSERT INTO `shipping` (`billing_id`, `billing_firstname`, `billing_lastname`, `billing_company`, `billing_phone`, `billing_address`, `billing_city`, `billing_country`, `billing_state`, `billing_zip`, `billing_email`, `password`, `billing_ip`) VALUES
(1, 'tulsi', 'jha', 'my company', '987654321', 'my address', 'delhi', 'india', 'delhi', 800008, 'tulsi@gmail.com', 'tulsi', 0),
(2, 'tulas', 'jha', 'my company', '5654345354', 'my address', 'delhi', 'India', 'delhi', 3453453, 'tulas@gmail.com', 'tulas', 0);

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

-- --------------------------------------------------------

--
-- Table structure for table `vendorlogin_tb`
--

CREATE TABLE `vendorlogin_tb` (
  `id` int(3) NOT NULL,
  `email` varchar(55) NOT NULL,
  `password` varchar(55) NOT NULL,
  `is_active` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vendorlogin_tb`
--

INSERT INTO `vendorlogin_tb` (`id`, `email`, `password`, `is_active`) VALUES
(1, 'admin@gmail.com', 'admin@123', 0),
(2, 'jhatulsi2011@gmail.com', 'jhatulsi@123', 0),
(5, 'userone@gmail.com', 'userone', 1),
(6, 'usertwo@gmail.com', 'user', 1),
(8, 'tulsi@gmail.com', 'tulsi', 1),
(9, 'userone@gmail.com', 'userone', 1),
(10, 'tulsijha@gmail.com', 'tulsijha', 1),
(11, 'newuser@gmail.com', 'newuser', 1);

-- --------------------------------------------------------

--
-- Table structure for table `vendorreg`
--

CREATE TABLE `vendorreg` (
  `vReg_id` int(11) NOT NULL,
  `name` varchar(55) NOT NULL,
  `comp_name` varchar(55) NOT NULL,
  `state` varchar(55) NOT NULL,
  `country` varchar(55) NOT NULL,
  `gender` text NOT NULL,
  `is_active` int(4) NOT NULL,
  `email` varchar(50) NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vendorreg`
--

INSERT INTO `vendorreg` (`vReg_id`, `name`, `comp_name`, `state`, `country`, `gender`, `is_active`, `email`, `image`) VALUES
(1, 'TULSI', 'Company', 'delhi', 'india', 'female', 1, 'tulsi@gmail.com', 'Jellyfish.jpg'),
(2, 'TULSI', 'Company', 'delhi', 'india', 'female', 1, 'userone@gmail.com', 'Jellyfish.jpg'),
(3, 'TULSI', 'Company', 'Delhi', 'india', '', 1, 'usertwo@gmail.com', 'Koala.jpg'),
(4, 'Tulsi Jha', 'my company', 'Patna', 'india', 'female', 1, 'tulsijha@gmail.com', 'Lighthouse.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `pending_order`
--
ALTER TABLE `pending_order`
  ADD PRIMARY KEY (`customer_id`);

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
-- Indexes for table `vendorlogin_tb`
--
ALTER TABLE `vendorlogin_tb`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendorreg`
--
ALTER TABLE `vendorreg`
  ADD PRIMARY KEY (`vReg_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `brand_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `cat_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `pending_order`
--
ALTER TABLE `pending_order`
  MODIFY `customer_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `products_color`
--
ALTER TABLE `products_color`
  MODIFY `color_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `shipping`
--
ALTER TABLE `shipping`
  MODIFY `billing_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `size_tb`
--
ALTER TABLE `size_tb`
  MODIFY `size_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `vendorlogin_tb`
--
ALTER TABLE `vendorlogin_tb`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `vendorreg`
--
ALTER TABLE `vendorreg`
  MODIFY `vReg_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
