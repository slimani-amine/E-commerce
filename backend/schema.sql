-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ecommerce
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ecommerce
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ecommerce` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `ecommerce` ;

-- -----------------------------------------------------
-- Table `ecommerce`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(255) NOT NULL,
  `lasstName` VARCHAR(255) NOT NULL,
  `adress` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`carts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `images` VARCHAR(255) NOT NULL,
  `colours` VARCHAR(255) NULL DEFAULT NULL,
  `size` VARCHAR(255) NULL DEFAULT NULL,
  `price` VARCHAR(255) NOT NULL,
  `userid` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `userid` (`userid` ASC) VISIBLE,
  CONSTRAINT `carts_ibfk_1`
    FOREIGN KEY (`userid`)
    REFERENCES `ecommerce`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`contacts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`contacts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(255) NOT NULL,
  `message` VARCHAR(255) NOT NULL,
  `userid` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `userid` (`userid` ASC) VISIBLE,
  CONSTRAINT `contacts_ibfk_1`
    FOREIGN KEY (`userid`)
    REFERENCES `ecommerce`.`users` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `images` VARCHAR(255) NOT NULL,
  `colours` VARCHAR(255) NULL DEFAULT NULL,
  `size` VARCHAR(255) NULL DEFAULT NULL,
  `price` VARCHAR(255) NOT NULL,
  `userid` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `userid` (`userid` ASC) VISIBLE,
  CONSTRAINT `products_ibfk_1`
    FOREIGN KEY (`userid`)
    REFERENCES `ecommerce`.`users` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 18
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`reviews` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `comments` VARCHAR(255) NOT NULL,
  `rating` INT NOT NULL,
  `ProductsID` INT NULL DEFAULT NULL,
  `UserID` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `ProductsID` (`ProductsID` ASC) VISIBLE,
  INDEX `UserID` (`UserID` ASC) VISIBLE,
  CONSTRAINT `reviews_ibfk_1`
    FOREIGN KEY (`ProductsID`)
    REFERENCES `ecommerce`.`products` (`id`),
  CONSTRAINT `reviews_ibfk_2`
    FOREIGN KEY (`UserID`)
    REFERENCES `ecommerce`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`wishlists`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`wishlists` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `images` VARCHAR(255) NOT NULL,
  `colours` VARCHAR(255) NULL DEFAULT NULL,
  `size` VARCHAR(255) NULL DEFAULT NULL,
  `price` VARCHAR(255) NOT NULL,
  `userid` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `userid` (`userid` ASC) VISIBLE,
  CONSTRAINT `wishlists_ibfk_1`
    FOREIGN KEY (`userid`)
    REFERENCES `ecommerce`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
