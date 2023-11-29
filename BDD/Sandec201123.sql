CREATE DATABASE  IF NOT EXISTS `sandecdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `sandecdb`;
-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sandecdb
-- ------------------------------------------------------
-- Server version	5.7.26-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(1000) DEFAULT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'audifonos','audifonos inalambricos','activo'),(2,'Telefonia','Son de telefonos','Activo'),(3,'Micas','Mica Cristal Templado','Activo');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Publico','Publico','4491234569','public@sandec.com','Activo'),(2,'Max Frias','Centro 205','4485263214','maxfrias@gmail.com','Activo'),(3,'Ernesto Sahid','Vistas del Sol','4495632141','esahid@gmail.com','Activo');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compra`
--

DROP TABLE IF EXISTS `compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `compra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idProveedor` int(11) NOT NULL,
  `fecha_compra` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `total_compra` decimal(10,2) NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_compra_proveedores_idx` (`idProveedor`),
  CONSTRAINT `FK_compra_proveedores` FOREIGN KEY (`idProveedor`) REFERENCES `proveedores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compra`
--

LOCK TABLES `compra` WRITE;
/*!40000 ALTER TABLE `compra` DISABLE KEYS */;
INSERT INTO `compra` VALUES (1,1,'2023-08-06 06:00:00',150.25,'activo'),(2,1,'2023-09-23 06:00:00',150.00,'Activo'),(3,1,'2023-10-16 14:46:20',125.15,'Activo'),(4,1,'2023-10-16 14:53:26',125.15,'Activo'),(5,1,'2023-10-16 14:59:10',125.15,'Activo'),(6,1,'2023-10-16 15:58:33',125.15,'Activo'),(7,1,'2023-10-16 15:59:34',125.15,'Activo'),(8,1,'2023-10-16 15:59:54',125.15,'Activo');
/*!40000 ALTER TABLE `compra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalles_compra`
--

DROP TABLE IF EXISTS `detalles_compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `detalles_compra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompra` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_detalleCompra_producto_idx` (`idProducto`),
  KEY `FK_detalleCompra_compra_idx` (`idCompra`),
  CONSTRAINT `FK_detalleCompra_compra` FOREIGN KEY (`idCompra`) REFERENCES `compra` (`id`),
  CONSTRAINT `FK_detalleCompra_producto` FOREIGN KEY (`idProducto`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalles_compra`
--

LOCK TABLES `detalles_compra` WRITE;
/*!40000 ALTER TABLE `detalles_compra` DISABLE KEYS */;
INSERT INTO `detalles_compra` VALUES (1,1,1,5,15.00,'Activo'),(2,6,1,2,15.00,'Activo'),(3,7,1,2,15.00,'Activo'),(4,7,2,1,20.00,'Activo'),(5,8,1,2,15.00,'Activo'),(6,8,2,1,20.00,'Activo');
/*!40000 ALTER TABLE `detalles_compra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalles_venta`
--

DROP TABLE IF EXISTS `detalles_venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `detalles_venta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idVenta` int(11) NOT NULL,
  `idproducto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_detalleVenta_productos_idx` (`idproducto`),
  KEY `FK_detalleVenta_Venta_idx` (`idVenta`),
  CONSTRAINT `FK_detalleVenta_Venta` FOREIGN KEY (`idVenta`) REFERENCES `ventas` (`id`),
  CONSTRAINT `FK_detalleVenta_productos` FOREIGN KEY (`idproducto`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalles_venta`
--

LOCK TABLES `detalles_venta` WRITE;
/*!40000 ALTER TABLE `detalles_venta` DISABLE KEYS */;
INSERT INTO `detalles_venta` VALUES (2,2,1,1,15.00,'Activo'),(3,5,1,2,15.00,'Activo'),(4,5,2,1,20.00,'Activo');
/*!40000 ALTER TABLE `detalles_venta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prestamos`
--

DROP TABLE IF EXISTS `prestamos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `prestamos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idVendedor` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `cantidadProd` int(11) NOT NULL,
  `montoPrestamo` float NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_prestamos_producto_idx` (`idProducto`),
  KEY `FK_prestamos_vendedor_idx` (`idVendedor`),
  CONSTRAINT `FK_prestamos_producto` FOREIGN KEY (`idProducto`) REFERENCES `productos` (`id`),
  CONSTRAINT `FK_prestamos_vendedor` FOREIGN KEY (`idVendedor`) REFERENCES `vendedor` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prestamos`
--

LOCK TABLES `prestamos` WRITE;
/*!40000 ALTER TABLE `prestamos` DISABLE KEYS */;
INSERT INTO `prestamos` VALUES (1,2,2,2,150,'Activo'),(2,2,1,2,150,'Activo'),(3,3,2,2,250.65,'Activo'),(4,3,3,1,170.65,'Activo'),(6,3,2,2,250.65,'Activo'),(7,3,3,1,170.65,'Activo'),(8,2,2,2,250.65,'Inactivo'),(9,2,3,1,170.65,'Activo');
/*!40000 ALTER TABLE `prestamos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `precio_compra` decimal(10,2) NOT NULL,
  `precio_venta` decimal(10,2) NOT NULL,
  `cantidad_stock` int(11) NOT NULL,
  `cantidad_minima` int(11) NOT NULL,
  `categoriaId` int(11) NOT NULL,
  `imagen` blob,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_productos_categorias_idx` (`categoriaId`),
  CONSTRAINT `FK_productos_categorias` FOREIGN KEY (`categoriaId`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'','',80.00,100.50,50,10,1,NULL,'2023-08-06 06:00:00','activo'),(2,'minion','tarolero',80.00,100.50,50,10,1,NULL,'2023-08-06 06:00:00','activo'),(3,'alex','chambeador',80.00,100.50,50,10,1,NULL,'2023-08-06 06:00:00','activo'),(4,'Mica Iphone 11','Mica Iphone 11',15.00,180.00,10,2,1,'','2023-09-23 06:00:00','Activo'),(5,'Iphone 12 Pro Max','El mejor iphone de la historia',15000.00,20000.00,15,5,2,_binary 'imagenIphone','2023-10-16 16:25:08','Activo');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `proveedores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedores`
--

LOCK TABLES `proveedores` WRITE;
/*!40000 ALTER TABLE `proveedores` DISABLE KEYS */;
INSERT INTO `proveedores` VALUES (1,'Ricardo','lejos lejos','4493018317','ricardo@gmail.com','activo'),(2,'Salvador Heredia','13 de junio','4456938574','ricasnelas@fmail.com','Activo'),(3,'Juan Perez','PLaza de la Tecnologia #152','4495632154','Juan@gmail.com','Activo');
/*!40000 ALTER TABLE `proveedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendedor`
--

DROP TABLE IF EXISTS `vendedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `vendedor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombreVendedor` varchar(45) NOT NULL,
  `nombreNegocio` varchar(45) NOT NULL,
  `telefonoContacto` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendedor`
--

LOCK TABLES `vendedor` WRITE;
/*!40000 ALTER TABLE `vendedor` DISABLE KEYS */;
INSERT INTO `vendedor` VALUES (2,'Rafael','Rajospagus','4493018317','Activo'),(3,'Ricardo Salvador','Sandec','4491635287','Activo'),(4,'Rafael Gutierrez','rajpagu','449563214','Activo');
/*!40000 ALTER TABLE `vendedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `ventas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCliente` int(11) NOT NULL,
  `fecha_venta` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `total_venta` decimal(10,2) NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ventas_clientes_idx` (`idCliente`),
  CONSTRAINT `FK_ventas_clientes` FOREIGN KEY (`idCliente`) REFERENCES `clientes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
INSERT INTO `ventas` VALUES (2,1,'2023-09-25 06:00:00',165.00,''),(3,1,'2023-09-25 06:00:00',165.00,''),(4,1,'2023-09-25 06:00:00',165.00,'Activo'),(5,1,'2023-10-16 16:05:17',1500.50,'Activo');
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'sandecdb'
--

--
-- Dumping routines for database 'sandecdb'
--
/*!50003 DROP PROCEDURE IF EXISTS `getCategorias` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCategorias`()
BEGIN
	SELECT * FROM categorias WHERE `status` = "Activo";
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getClientes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getClientes`()
BEGIN
	SELECT * FROM clientes WHERE `status` = "Activo";
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getCompras` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCompras`()
BEGIN
	SELECT 
		`compra`.`id` as idCompra,
        `proveedores`.`nombre` as proveedor,
        date_format(`compra`.`fecha_compra`,'%d-%m-%y') as fechaCompra,
        `compra`.`total_compra` as total
        FROM compra INNER JOIN proveedores ON `proveedores`.`id` = `compra`.`idProveedor` where `compra`.`status` = "Activo";
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getDetalleCompras` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getDetalleCompras`(
	`_idCompra` int(11)
)
BEGIN
	SELECT 
		`detalles_compra`.`idCompra` as idCompra,
        `productos`.`nombre` as nombreProducto,
        `detalles_compra`.`cantidad` as cantidad,
        `detalles_compra`.`precio_unitario` as precio
	FROM detalles_compra INNER JOIN productos ON `productos`.`id` = `detalles_compra`.`idProducto` WHERE `detalles_compra`.`idCompra` = `_idCompra`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getDetalleVenta` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getDetalleVenta`(
	`_idVenta` int(11)
)
BEGIN
	SELECT 
		`detalles_venta`.`idVenta` as idVenta,
        `productos`.`nombre` as nombreProducto,
        `detalles_venta`.`cantidad` as cantidad,
        `detalles_venta`.`precio_unitario` as precio
	FROM `detalles_venta` INNER JOIN productos ON `productos`.`id` = `detalles_venta`.`idproducto` WHERE `detalles_venta`.`idVenta` = `_idVenta`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getPrestamos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getPrestamos`(
)
BEGIN
	SELECT 
		`prestamos`.`id` as idPrestamo, 
        `vendedor`.`nombreVendedor` as vendedor, 
        `productos`.`nombre` as nombreProducto, 
        `prestamos`.`cantidadProd` as cantidad, 
        `prestamos`.`montoPrestamo` as monto
	FROM `prestamos` 
    INNER JOIN productos ON `productos`.`id` = `prestamos`.`idProducto`
    INNER JOIN `vendedor` on `vendedor`.`id` = `prestamos`.`idVendedor` WHERE `prestamos`.`status` = "Activo";
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getPrestamoVendedor` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getPrestamoVendedor`(
	`_idVendedor` int(11)
)
BEGIN
	SELECT 
		`prestamos`.`id` as idPrestamo, 
        `vendedor`.`nombreVendedor` as vendedor, 
        `productos`.`nombre` as nombreProducto, 
        `prestamos`.`cantidadProd` as cantidad, 
        `prestamos`.`montoPrestamo` as monto
	FROM `prestamos` 
    INNER JOIN productos ON `productos`.`id` = `prestamos`.`idProducto`
    INNER JOIN `vendedor` on `vendedor`.`id` = `prestamos`.`idVendedor`
    WHERE
    `prestamos`.`idVendedor` = `_idVendedor` and `prestamos`.`status` = "Activo";
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getProductos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getProductos`(
)
BEGIN
	SELECT 
		id, 
        nombre, 
        descripcion, 
        precio_compra, 
        precio_venta, 
        cantidad_stock, 
        cantidad_minima, 
        categoriaId,
        date_format(`productos`.`fecha_creacion`,'%d-%m-%y') as fechaCreacion, 
        `status`
	FROM `productos`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getProveedores` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getProveedores`(
)
BEGIN
	SELECT 
		*
	FROM `proveedores` where `status` = "Activo";
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getVendedores` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getVendedores`(
)
BEGIN
	SELECT 
		*
	FROM `vendedor` where `status` = "Activo";
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getVentas` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getVentas`(
)
BEGIN
	SELECT 
		`ventas`.`id` as id,
        `clientes`.`nombre` as nombreCliente,
		date_format(`ventas`.`fecha_venta`,'%d-%m-%y') as fecha,
        `ventas`.`total_venta` as total,
        `ventas`.`status` as `status`
	FROM `ventas`
    INNER JOIN `clientes` on `clientes`.`id` = `ventas`.`idCliente`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `postCategorias` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `postCategorias`(
	`_nombre` varchar(255),
    `_descripcion` varchar(255),
    `_status` varchar(45)
)
BEGIN
	INSERT INTO categorias
    (`nombre`,`descripcion`,`status`)
    VALUES 
    (`_nombre`,`_descripcion`,`_status`);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `postClientes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `postClientes`(
	`_nombre` varchar(255),
    `_direccion` varchar(255),
    `_telefono` varchar(20),
    `_email` varchar(255),
    `_status` varchar(45)
)
BEGIN
	INSERT INTO clientes
    (`nombre`,`direccion`,`telefono`,`email`,`status`)
    VALUES 
    (`_nombre`,`_direccion`,`_telefono`,`_email`,`_status`);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `postCompra` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `postCompra`(
	`_idProveedor` int(11),
    `_fecha_compra` timestamp,
    `_total_compra` decimal(10,2),
    `_status` varchar(45)
)
BEGIN
	INSERT INTO compra
    (`idProveedor`,`fecha_compra`,`total_compra`,`status`)
    VALUES 
    (`_idProveedor`,`_fecha_compra`,`_total_compra`,`_status`);
    
    -- Obtener el último ID insertado
    SET @last_id := LAST_INSERT_ID();

    -- Devolver el ID insertado
    SELECT @last_id AS idCompra;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `postDetallesCompra` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `postDetallesCompra`(
	`_idCompra` int(11),
    `_idProducto` int(11),
    `_cantidad` int(11),
    `_precio_unitario` decimal(10,2),
    `_status` varchar(45)
)
BEGIN
	INSERT INTO detalles_compra
    (`idCompra`,`idProducto`,`cantidad`,`precio_unitario`,`status`)
    VALUES 
    (`_idCompra`,`_idProducto`,`_cantidad`,`_precio_unitario`,`_status`);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `postDetallesVenta` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `postDetallesVenta`(
	`_idVenta` int(11),
    `_idproducto` int(11),
    `_cantidad` int(11),
    `_precio_unitario` decimal(10,2),
    `_status` varchar(45)
)
BEGIN
	INSERT INTO detalles_venta
    (`idVenta`,`idproducto`,`cantidad`,`precio_unitario`,`status`)
    VALUES 
    (`_idVenta`,`_idproducto`,`_cantidad`,`_precio_unitario`,`_status`);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `postPrestamos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `postPrestamos`(
	`_idVendedor` int(11), 
    `_idProducto` int(11), 
    `_cantidadProd` int(11), 
    `_montoPrestamo` float, 
    `_status` varchar(45)
)
BEGIN
	INSERT INTO prestamos
    (`idVendedor`,`idProducto`,`cantidadProd`,`montoPrestamo`,`status`)
    VALUES 
    (`_idVendedor`,`_idProducto`,`_cantidadProd`,`_montoPrestamo`,`_status`);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `postProductos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `postProductos`(
	`_nombre` varchar(255),
    `_descripcion` varchar(255),
    `_precio_compra` decimal(10,2),
    `_precio_venta` decimal(10,2),
    `_cantidad_stock` int(11),
    `_cantidad_minima` int(11),
    `_categoriaId` int(11),
    `_imagen` blob,
    `_fecha_creacion` timestamp,
    `_status` varchar(45)   
)
BEGIN
	INSERT INTO productos 
    (`nombre`, `descripcion`, `precio_compra`, `precio_venta`, `cantidad_stock`,`cantidad_minima`,`categoriaId`,`imagen`,`fecha_creacion`,`status`)
    VALUES 
    (`_nombre`,`_descripcion`,`_precio_compra`,`_precio_venta`,`_cantidad_stock`,`_cantidad_minima`,`_categoriaId`,`_imagen`,`_fecha_creacion`,`_status`);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `postProveedores` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `postProveedores`(
	`_nombre` varchar(255),
    `_direccion` varchar(255),
    `_telefono` varchar(45),
    `_email` varchar(45),
    `_status` varchar(45)    
)
BEGIN
	INSERT INTO proveedores (`nombre`,`direccion`,`telefono`,`email`,`status`)
    VALUES (`_nombre`,`_direccion`,`_telefono`,`_email`,`_status`);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `postVendedor` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `postVendedor`(
	`_nombreVendedor` varchar(45),
    `_nombreNegocio` varchar(45),
    `_telefonoContacto` varchar(45),
    `_status` varchar(45)
)
BEGIN
	INSERT INTO vendedor (`nombreVendedor`,`nombreNegocio`,`telefonoContacto`,`status`)
    VALUES (`_nombreVendedor`,`_nombreNegocio`,`_telefonoCOntacto`,`_status`);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `postVentas` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `postVentas`(
	`_idCliente` int (11),
    `_fechaVenta` timestamp,
    `_totalVenta` decimal(10,2),
    `_status` varchar(45)
)
BEGIN
	INSERT INTO ventas (`idCliente`,`fecha_venta`,`total_venta`,`status`)
    VALUES (`_idCliente`,`_FechaVenta`,`_totalVenta`,`_status`);
    
    -- Obtener el último ID insertado
    SET @last_id := LAST_INSERT_ID();

    -- Devolver el ID insertado
    SELECT @last_id AS idVenta;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `putEjemplo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `putEjemplo`(
	IN `_ID-Ejercicio` varchar(45),
	IN `_FK-ID-Organizacion` varchar(45),
    IN `_D-Nombre` varchar(45),
    IN `_D-Aplicacion` varchar(255),
    IN `_D-Video` varchar(45),
    IN `_S-Producto` varchar(7),
    IN `_B-Fecha` datetime,
    IN `_B-Usuario` varchar(50),
    IN `_S-Status` varchar(30),
    IN `_B-Coordenada-X` decimal(9,6),
    IN `_B-Coordenada-Y` decimal(9,6)
)
BEGIN
	DECLARE blnUsuarioExiste boolean DEFAULT false;
    DECLARE blnActualizacionValida boolean DEFAULT false;
    DECLARE intEstatus int DEFAULT 200;
    set @strSentenciaUpdate = 'update `CT-Ejercicios` SET ';
    set blnUsuarioExiste = (select blnUsuarioExistente(`_B-Usuario`));
    if (blnUsuarioExiste) then
		if (`_S-Status` is not null) then
			if exists (select * from `CT-Status` where `ID-Status` = `_S-Status` and `FK-Producto` = `_S-Producto`) then
				set blnActualizacionValida = true;
            end if;
            set @strSentenciaUpdate = CONCAT(@strSentenciaUpdate,'`S-Status` = "',`_S-Status`,'" , `S-Producto` = "', `_S-Producto`,'"');
        end if;
        if (`_D-Nombre` is not null) then
			if(blnActualizacionValida) then
				set @strSentenciaUpdate = CONCAT(@strSentenciaUpdate,',');
            end if;
            set @strSentenciaUpdate = CONCAT(@strSentenciaUpdate,'`D-Nombre` = "',`_D-Nombre`,'"');
            set blnActualizacionValida = true;
        end if;
        if (`_D-Aplicacion` is not null) then
			if(blnActualizacionValida) then
				set @strSentenciaUpdate = CONCAT(@strSentenciaUpdate,',');
            end if;
            set @strSentenciaUpdate = CONCAT(@strSentenciaUpdate,'`D-Aplicacion` = "',`_D-Aplicacion`,'"');
            set blnActualizacionValida = true;
        end if;
        if (`_D-Video` is not null) then
			if(blnActualizacionValida) then
				set @strSentenciaUpdate = CONCAT(@strSentenciaUpdate,',');
            end if;
            set @strSentenciaUpdate = CONCAT(@strSentenciaUpdate,'`D-Video` = "',`_D-Video`,'"');
            set blnActualizacionValida = true;
        end if;
       if (blnActualizacionValida) then
			set @strSentenciaUpdate = CONCAT(@strSentenciaUpdate,', `B-Fecha-Modificacion` = "',`_B-Fecha`,'", `B-Usuario-Modificacion` = "',`_B-Usuario`,'", `B-Coordenada-Modificacion` = point(',`_B-Coordenada-X`,',',`_B-Coordenada-Y`,')');
			set @strSentenciaUpdate = CONCAT(@strSentenciaUpdate,' where `ID-Ejercicio` = "',`_ID-Ejercicio`,'" and `FK-ID-Organizacion` ="',`_FK-ID-Organizacion`,'";');
            
            prepare actualizar from @strSentenciaUpdate;
            execute actualizar;
        else
			set intEstatus = 202;
			select intEstatus;
		end if;
    else 
		set intEstatus = 201;
        select intEstatus;
    end if;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-20 16:04:59
