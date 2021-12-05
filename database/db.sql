-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema the_locker
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema the_locker
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `the_locker` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;
USE `the_locker` ;

-- -----------------------------------------------------
-- Table `the_locker`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `the_locker`.`cliente` (
  `correoCliente` VARCHAR(50) NOT NULL,
  `nombreCliente` VARCHAR(45) NOT NULL,
  `numeroCliente` INT NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`correoCliente`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;


-- -----------------------------------------------------
-- Table `the_locker`.`prenda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `the_locker`.`prenda` (
  `idPrenda` INT NOT NULL AUTO_INCREMENT,
  `nombrePrenda` VARCHAR(45) NULL DEFAULT NULL,
  `precioPrenda` VARCHAR(45) NULL DEFAULT NULL,
  `tipoPrenda` VARCHAR(45) NULL DEFAULT NULL,
  `tallaPrenda` VARCHAR(45) NULL DEFAULT NULL,
  `clasificacionPrenda` VARCHAR(45) NULL DEFAULT NULL,
  `cantidadPrenda` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idPrenda`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;


-- -----------------------------------------------------
-- Table `the_locker`.`carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `the_locker`.`carrito` (
  `idCarrito` INT NOT NULL,
  `idCliente` VARCHAR(45) NULL DEFAULT NULL,
  `idPrenda` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idCarrito`),
  INDEX `idCliente_idx` (`idCliente` ASC) ,
  INDEX `idPrenda_idx` (`idPrenda` ASC) ,
  CONSTRAINT `idCliente`
    FOREIGN KEY (`idCliente`)
    REFERENCES `the_locker`.`cliente` (`correoCliente`),
  CONSTRAINT `idPrenda`
    FOREIGN KEY (`idPrenda`)
    REFERENCES `the_locker`.`prenda` (`idPrenda`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
