-- CreateTable
CREATE TABLE `ONGS` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    `cnpj` VARCHAR(14) NOT NULL,
    `cidade` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `ONGS_cnpj_key`(`cnpj`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Areas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `localizacao` VARCHAR(100) NOT NULL,
    `tamanho` VARCHAR(100) NOT NULL,
    `ongID` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Areas` ADD CONSTRAINT `Areas_ongID_fkey` FOREIGN KEY (`ongID`) REFERENCES `ONGS`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
