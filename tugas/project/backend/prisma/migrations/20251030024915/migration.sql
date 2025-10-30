-- AlterTable
ALTER TABLE `custom` ADD COLUMN `kodecustom` VARCHAR(191) NOT NULL DEFAULT 'TBD';

-- AlterTable
ALTER TABLE `detailpesanan` ADD COLUMN `kodedetail` VARCHAR(191) NOT NULL DEFAULT 'TBD';

-- AlterTable
ALTER TABLE `pesanan` ADD COLUMN `kodepesanan` VARCHAR(191) NOT NULL DEFAULT 'TBD';

-- AlterTable
ALTER TABLE `produk` ADD COLUMN `kodeproduk` VARCHAR(191) NOT NULL DEFAULT 'TBD';
