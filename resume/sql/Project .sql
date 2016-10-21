-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-09-30 09:27:22
-- 服务器版本： 10.1.10-MariaDB
-- PHP Version: 7.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chenliang`
--

-- --------------------------------------------------------

--
-- 表的结构 `Project`
--

CREATE TABLE `Project` (
  `id` int(50) NOT NULL COMMENT 'ID',
  `message` text NOT NULL COMMENT '信息'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `Project`
--

INSERT INTO `Project` (`id`, `message`) VALUES
(38, '亲,留下你的足迹....|#房东'),
(39, '你们城里人真会玩|#沙发'),
(40, '我只想安静的做个美男子|#板凳'),
(41, '画面太美我不敢看|#四楼'),
(42, '重要的事说三遍,会有奇迹发生|#五楼'),
(43, '我读书少,你别扁我|#六楼'),
(44, '空间里点击发送|2016-09-30 15:20:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Project`
--
ALTER TABLE `Project`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `Project`
--
ALTER TABLE `Project`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT COMMENT 'ID', AUTO_INCREMENT=45;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
