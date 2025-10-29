-- CreateTable
CREATE TABLE `Produk` (
    `idproduk` INTEGER NOT NULL AUTO_INCREMENT,
    `namaproduk` VARCHAR(80) NOT NULL,
    `deskripsi` TEXT NULL,
    `harga` INTEGER NOT NULL,
    `gambar` VARCHAR(255) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`idproduk`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetailPesanan` (
    `iddetailpesanan` INTEGER NOT NULL AUTO_INCREMENT,
    `jumlahitem` INTEGER NOT NULL,
    `hargasatuan` DECIMAL(10, 2) NOT NULL,
    `totalharga` DECIMAL(10, 2) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `produkId` INTEGER NOT NULL,
    `pesananId` INTEGER NOT NULL,

    PRIMARY KEY (`iddetailpesanan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Custom` (
    `idcustom` INTEGER NOT NULL AUTO_INCREMENT,
    `ucapan` TEXT NULL,
    `jumlahlilin` INTEGER NULL,
    `rasa` VARCHAR(50) NULL,
    `catatan` TEXT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `detailPesananId` INTEGER NOT NULL,

    UNIQUE INDEX `Custom_detailPesananId_key`(`detailPesananId`),
    PRIMARY KEY (`idcustom`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pesanan` (
    `idpesanan` INTEGER NOT NULL AUTO_INCREMENT,
    `namapembeli` VARCHAR(50) NOT NULL,
    `nohp` VARCHAR(15) NOT NULL,
    `alamat` VARCHAR(50) NOT NULL,
    `tanggalpesan` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `hargakeseluruhan` DECIMAL(10, 2) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`idpesanan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DetailPesanan` ADD CONSTRAINT `DetailPesanan_produkId_fkey` FOREIGN KEY (`produkId`) REFERENCES `Produk`(`idproduk`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetailPesanan` ADD CONSTRAINT `DetailPesanan_pesananId_fkey` FOREIGN KEY (`pesananId`) REFERENCES `Pesanan`(`idpesanan`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Custom` ADD CONSTRAINT `Custom_detailPesananId_fkey` FOREIGN KEY (`detailPesananId`) REFERENCES `DetailPesanan`(`iddetailpesanan`) ON DELETE RESTRICT ON UPDATE CASCADE;
