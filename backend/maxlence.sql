-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 24, 2024 at 09:20 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `maxlence`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT 'user',
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `avatar`, `password`, `token`, `role`, `createdAt`, `updatedAt`) VALUES
('1708692662324', 'Rakib RsM', 'rakibrakib@gmail.com', 'https://res.cloudinary.com/rakib-rsm-cloudinary/image/upload/v1708692664/nhyjxrp4fjkj5ibz3wne.jpg', '$2b$10$BmJh0.2uYT/oM4UTWkahKeFHtvTAhHimfFgTNFTZ49mdxN9/yYGKa', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcwODY5MjY2MjMyNCwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzA4NjkyNjYyLCJleHAiOjE3MTEyODQ2NjJ9.ViOWfBSZ6E_yp0yTBj2zRL9nNtT30XHuV2VR6wBqcHA', 'admin', '2024-02-23 12:51:05', '2024-02-23 12:51:05'),
('1708692910531', '31', 'dummy@test.com', 'https://res.cloudinary.com/rakib-rsm-cloudinary/image/upload/v1708692911/nw65b3zpwaehjll2vgym.png', '$2b$10$CnSBMzXX1OD6UJBotn1YRuLZrzYq2W8/CN/He8cOjOr07Jg5Vohd6', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcwODY5MjkxMDUzMSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzA4NjkyOTEwLCJleHAiOjE3MTEyODQ5MTB9.WRFwebbafqNYlR2Y5t3B74yv_BECWKJ59R-0v0InI60', 'admin', '2024-02-23 12:55:11', '2024-02-23 19:31:19'),
('1708693167550', 'Dummy Name', 'dummy@test.com', 'https://res.cloudinary.com/rakib-rsm-cloudinary/image/upload/v1708693168/hm9f8pnync2eip7chl3j.png', '$2b$10$m8rEhsFVLjrl2HrEOtWUtuORvcpGQApj9UqUpy3elIug6WHSlzjTq', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcwODY5MzE2NzU1MCwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzA4NjkzMTY3LCJleHAiOjE3MTEyODUxNjd9.FiluYtHxsyXIY2UNd5bCZeMcx0QuCRF-rYl10f4P7V0', 'user', '2024-02-23 12:59:28', '2024-02-23 19:47:49'),
('1708693180957', 'Dummy Name', 'test@test.com', 'https://res.cloudinary.com/rakib-rsm-cloudinary/image/upload/v1708693182/dgscaacmboejvpz9u6pc.png', '$2b$10$iGOrf4xkkuC1XaSSuh6yZ.Jyrg6iwk0a9t2wZXImk1EG88Iz3Jhca', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcwODY5MzE4MDk1Nywicm9sZSI6ImFkbWluIiwiaWF0IjoxNzA4NjkzMTgxLCJleHAiOjE3MTEyODUxODF9.r36eD-Jj5acc3xz8lmp2vyExpvM90O7cnIv9pe8xwOo', 'admin', '2024-02-23 12:59:43', '2024-02-23 12:59:43'),
('1708693188152', 'Rakib RsM', 'mail@test.com', 'https://res.cloudinary.com/rakib-rsm-cloudinary/image/upload/v1708693188/lmathrul5t6nn1tjyrad.png', '$2b$10$evTDNf0esrH8OZJgW7Sx3eBV0Djto80ftLxUmFa5KncZH3PMOiUQu', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcwODY5MzE4ODE1Miwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzA4NjkzMTg4LCJleHAiOjE3MTEyODUxODh9.aPPjbed3x5EmrmVMYEvvNDbKrUVcxh5T5oV3hFFsTXs', 'user', '2024-02-23 12:59:49', '2024-02-23 19:31:48'),
('1708693189977', 'Dummy Name', 'mail@test.com', 'https://res.cloudinary.com/rakib-rsm-cloudinary/image/upload/v1708693190/m8acyooqpqwfiqzwbgqc.png', '$2b$10$IWpHUovWTCVaP7cRK4Hj1eKnrjnnDsVED4Xn2A7ntcmfSwJ3jBk5K', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcwODY5MzE4OTk3Nywicm9sZSI6ImFkbWluIiwiaWF0IjoxNzA4NjkzMTkwLCJleHAiOjE3MTEyODUxOTB9.h-wgFSNfDSBeStj8BMS9EOpO3m_Z-RDPH2fmI4D9BDM', 'admin', '2024-02-23 12:59:51', '2024-02-23 12:59:51'),
('1708693223015', 'Rakib RsM', 'rakib@rakib.com', 'https://res.cloudinary.com/rakib-rsm-cloudinary/image/upload/v1708703239/wuqyspo4tkyrsr8xfgx4.jpg', '$2b$10$T8fAeCsCo5wjiBDW1Kvvs.3pI1iM6SUjiYLY.nybtO3eBz3kfumTm', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcwODY5MzIyMzAxNSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzA4NjkzMjIzLCJleHAiOjE3MTEyODUyMjN9.zepYFIxQN64aw6_6f0SyRFzVbas716_kH-ZU-715o7w', 'admin', '2024-02-23 13:00:25', '2024-02-23 20:50:13'),
('1708758184026', 'Dummy Name', 'mail@test.com', 'https://res.cloudinary.com/rakib-rsm-cloudinary/image/upload/v1708758185/uxi1zmgw2ryf6mbfko3p.png', '$2b$10$ZRVt5aUYjSGQbYYWpErduOTxrL.OcDGFS628NXKIfAewJEOYALyDm', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcwODc1ODE4NDAyNiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzA4NzU4MTg0LCJleHAiOjE3MTEzNTAxODR9.tTR_TMYCrMtVZ12m7Ap6TRyHrAwgjKo0dSMB6TC5gXE', 'admin', '2024-02-24 07:03:06', '2024-02-24 07:03:06'),
('1708762132143', 'Rakibul Islam', 'abcd625432@gmail.com', 'https://res.cloudinary.com/rakib-rsm-cloudinary/image/upload/v1708762134/zovwqt7pnato6xolxuv4.png', '$2b$10$OSfyMBxb9VSEeMIMhWN5H.y2bDBp4/DymFIsUHl1OB2axxOq.J9kK', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcwODc2MjEzMjE0Mywicm9sZSI6ImFkbWluIiwiaWF0IjoxNzA4NzYyMTMyLCJleHAiOjE3MTEzNTQxMzJ9.JGQz1mDmTnjgsS2PWzadfklknkejo499pzoAzHtB6Jc', 'admin', '2024-02-24 08:08:54', '2024-02-24 08:08:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
