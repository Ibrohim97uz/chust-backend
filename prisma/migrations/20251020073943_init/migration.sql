-- CreateEnum
CREATE TYPE "EmergencyStatusEnum" AS ENUM ('PENDING', 'DONE');

-- CreateEnum
CREATE TYPE "GenderEnum" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "CitizenshipEnum" AS ENUM ('ALL', 'UZBEK', 'STATELESS', 'FOREIGNER');

-- CreateEnum
CREATE TYPE "MartialStatusEnum" AS ENUM ('ALL', 'SINGLE', 'DIVORCED', 'MARRIED', 'WIDOWED');

-- CreateEnum
CREATE TYPE "EducationTypeEnum" AS ENUM ('HIGHER_EDUCATION', 'INCOMPLETE_HIGHER_EDUCATION', 'SECONDARY_EDUCATION', 'PRIMARY_EDUCATION', 'NO_EDUCATION');

-- CreateEnum
CREATE TYPE "ListedEnum" AS ENUM ('ALL', 'IRON_NOTEBOOK', 'YOUTH_NOTEBOOK', 'WOMENS_NOTEBOOK');

-- CreateEnum
CREATE TYPE "DocumentTypeEnum" AS ENUM ('ALL', 'COUNCIL_DECISION', 'GOVERNOR_ORDER', 'GOVERNOR_DECISION', 'OTHER');

-- CreateTable
CREATE TABLE "Showcase" (
    "id" SERIAL NOT NULL,
    "address_uz" TEXT,
    "address_en" TEXT,
    "address_ru" TEXT,
    "address_oz" TEXT,
    "chust_admin_phone" TEXT,
    "short_phone_number" TEXT,

    CONSTRAINT "Showcase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CityNews" (
    "id" SERIAL NOT NULL,
    "image" TEXT,
    "title_uz" TEXT,
    "title_en" TEXT,
    "title_ru" TEXT,
    "title_oz" TEXT,
    "desc_uz" TEXT,
    "desc_en" TEXT,
    "desc_ru" TEXT,
    "desc_oz" TEXT,
    "inner_images" TEXT[],
    "tags" TEXT[],

    CONSTRAINT "CityNews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DistrictNews" (
    "id" SERIAL NOT NULL,
    "image" TEXT,
    "title_uz" TEXT,
    "title_en" TEXT,
    "title_ru" TEXT,
    "title_oz" TEXT,
    "desc_uz" TEXT,
    "desc_en" TEXT,
    "desc_ru" TEXT,
    "desc_oz" TEXT,
    "inner_images" TEXT[],
    "tags" TEXT[],

    CONSTRAINT "DistrictNews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmergencyNews" (
    "id" SERIAL NOT NULL,
    "image" TEXT,
    "title_uz" TEXT,
    "title_en" TEXT,
    "title_ru" TEXT,
    "title_oz" TEXT,
    "desc_uz" TEXT,
    "desc_en" TEXT,
    "desc_ru" TEXT,
    "desc_oz" TEXT,
    "for" TEXT,
    "parentId" INTEGER,

    CONSTRAINT "EmergencyNews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Video" (
    "id" SERIAL NOT NULL,
    "content" TEXT,
    "title_uz" TEXT,
    "title_ru" TEXT,
    "title_en" TEXT,
    "title_oz" TEXT,
    "tags" TEXT[],

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gallery" (
    "id" SERIAL NOT NULL,
    "images" TEXT,
    "title_uz" TEXT,
    "title_ru" TEXT,
    "title_en" TEXT,
    "title_oz" TEXT,
    "author" TEXT,
    "tags" TEXT[],

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisualReception" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "middle_name" TEXT,
    "email" TEXT,
    "appeal_type" TEXT,
    "enter_address" TEXT,
    "address" TEXT,
    "phone_number" TEXT,
    "appeal_text" TEXT,
    "upload_files" TEXT,
    "rules_confirm" TEXT,

    CONSTRAINT "VisualReception_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmergencyPhones" (
    "id" SERIAL NOT NULL,
    "phone_number" TEXT,
    "desc_uz" TEXT,
    "desc_ru" TEXT,
    "desc_en" TEXT,
    "desc_oz" TEXT,

    CONSTRAINT "EmergencyPhones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HelpPhone" (
    "id" SERIAL NOT NULL,
    "phone_number" TEXT,
    "desc_uz" TEXT,
    "desc_ru" TEXT,
    "desc_en" TEXT,
    "desc_oz" TEXT,

    CONSTRAINT "HelpPhone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HelloChust" (
    "id" SERIAL NOT NULL,
    "image" TEXT,
    "title_uz" TEXT,
    "title_en" TEXT,
    "title_ru" TEXT,
    "title_oz" TEXT,
    "desc_uz" TEXT,
    "desc_en" TEXT,
    "desc_ru" TEXT,
    "desc_oz" TEXT,
    "inner_images" TEXT[],

    CONSTRAINT "HelloChust_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Services" (
    "id" SERIAL NOT NULL,
    "title_uz" TEXT,
    "title_en" TEXT,
    "title_ru" TEXT,
    "title_oz" TEXT,
    "desc_uz" TEXT,
    "desc_en" TEXT,
    "desc_ru" TEXT,
    "desc_oz" TEXT,
    "url" TEXT,
    "video" TEXT,
    "is_popular" BOOLEAN,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Opportunities" (
    "id" SERIAL NOT NULL,
    "question_uz" TEXT,
    "question_ru" TEXT,
    "question_en" TEXT,
    "question_oz" TEXT,
    "question_desc_uz" TEXT,
    "question_desc_ru" TEXT,
    "question_desc_en" TEXT,
    "question_desc_oz" TEXT,
    "age_from" INTEGER,
    "age_to" INTEGER,
    "gender" "GenderEnum",
    "disability" BOOLEAN,
    "citizenship" "CitizenshipEnum",
    "martial_status" "MartialStatusEnum",
    "presence_of_children" BOOLEAN,
    "education" "EducationTypeEnum",
    "presence_of_car" BOOLEAN,
    "presence_of_realestate" BOOLEAN,
    "criminal_record" BOOLEAN,
    "presence_of_pet" BOOLEAN,
    "pension" BOOLEAN,
    "listed" "ListedEnum",
    "spheres" TEXT[],

    CONSTRAINT "Opportunities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsefulApps" (
    "id" SERIAL NOT NULL,
    "image" TEXT,
    "title_uz" TEXT,
    "title_en" TEXT,
    "title_ru" TEXT,
    "title_oz" TEXT,
    "desc_uz" TEXT,
    "desc_en" TEXT,
    "desc_ru" TEXT,
    "desc_oz" TEXT,
    "play_market_url" TEXT,
    "app_stor_url" TEXT,

    CONSTRAINT "UsefulApps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsefulCities" (
    "id" SERIAL NOT NULL,
    "image" TEXT,
    "title_uz" TEXT,
    "title_en" TEXT,
    "title_ru" TEXT,
    "title_oz" TEXT,
    "url" TEXT,

    CONSTRAINT "UsefulCities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Structures" (
    "id" SERIAL NOT NULL,
    "director_name" TEXT,
    "director_phone_number" TEXT,
    "director_email" TEXT,
    "director_address_uz" TEXT,
    "director_address_ru" TEXT,
    "director_address_en" TEXT,
    "director_address_oz" TEXT,
    "director_telegram_bot_name" TEXT,
    "director_telegram_bot_url" TEXT,
    "director_facebook_name" TEXT,
    "director_facebook_url" TEXT,
    "desc_uz" TEXT,
    "desc_en" TEXT,
    "desc_ru" TEXT,
    "desc_oz" TEXT,
    "internal_management_image" TEXT,
    "internal_management_file" TEXT,

    CONSTRAINT "Structures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Articles" (
    "id" SERIAL NOT NULL,
    "title_uz" TEXT,
    "title_en" TEXT,
    "title_ru" TEXT,
    "title_oz" TEXT,
    "desc_uz" TEXT,
    "desc_en" TEXT,
    "desc_ru" TEXT,
    "desc_oz" TEXT,
    "url" TEXT,

    CONSTRAINT "Articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meetings" (
    "id" SERIAL NOT NULL,
    "image" TEXT,
    "title_uz" TEXT,
    "title_en" TEXT,
    "title_ru" TEXT,
    "title_oz" TEXT,
    "desc_uz" TEXT,
    "desc_en" TEXT,
    "desc_ru" TEXT,
    "desc_oz" TEXT,
    "inner_images" TEXT[],

    CONSTRAINT "Meetings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentsForCorruption" (
    "id" SERIAL NOT NULL,
    "title_uz" TEXT,
    "title_en" TEXT,
    "title_ru" TEXT,
    "title_oz" TEXT,
    "file" TEXT,

    CONSTRAINT "DocumentsForCorruption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "image" TEXT,
    "about_uz" TEXT,
    "about_en" TEXT,
    "about_ru" TEXT,
    "about_oz" TEXT,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutGovernment" (
    "id" SERIAL NOT NULL,
    "title_uz" TEXT,
    "title_en" TEXT,
    "title_ru" TEXT,
    "title_oz" TEXT,
    "desc_uz" TEXT,
    "desc_en" TEXT,
    "desc_ru" TEXT,
    "desc_oz" TEXT,
    "image" TEXT,

    CONSTRAINT "AboutGovernment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StructureDirector" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT,
    "email" TEXT,
    "address" TEXT,
    "working_time" TEXT,

    CONSTRAINT "StructureDirector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StructureLeadership" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT,
    "desc_uz" TEXT,
    "desc_en" TEXT,
    "desc_ru" TEXT,
    "desc_oz" TEXT,
    "phone_number" TEXT,
    "email" TEXT,
    "reception_time" TEXT,
    "bio_duties_uz" TEXT,
    "bio_duties_en" TEXT,
    "bio_duties_ru" TEXT,
    "bio_duties_oz" TEXT,

    CONSTRAINT "StructureLeadership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StructureCentralApparatus" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT,
    "desc_uz" TEXT,
    "desc_en" TEXT,
    "desc_ru" TEXT,
    "desc_oz" TEXT,
    "phone_number" TEXT,
    "email" TEXT,
    "reception_time" TEXT,
    "bio_duties_uz" TEXT,
    "bio_duties_en" TEXT,
    "bio_duties_ru" TEXT,
    "bio_duties_oz" TEXT,

    CONSTRAINT "StructureCentralApparatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StructureSystemOrg" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT,
    "desc_uz" TEXT,
    "desc_en" TEXT,
    "desc_ru" TEXT,
    "desc_oz" TEXT,
    "phone_number" TEXT,
    "email" TEXT,
    "reception_time" TEXT,
    "bio_duties_uz" TEXT,
    "bio_duties_en" TEXT,
    "bio_duties_ru" TEXT,
    "bio_duties_oz" TEXT,

    CONSTRAINT "StructureSystemOrg_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrganizationalStructure" (
    "id" SERIAL NOT NULL,
    "image" TEXT,

    CONSTRAINT "OrganizationalStructure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PressService" (
    "id" SERIAL NOT NULL,
    "text_uz" TEXT,
    "text_en" TEXT,
    "text_ru" TEXT,
    "text_oz" TEXT,
    "phone_number" TEXT,
    "email" TEXT,
    "telegram" TEXT,
    "youtube" TEXT,
    "facebook" TEXT,
    "instagram" TEXT,

    CONSTRAINT "PressService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Documents" (
    "id" SERIAL NOT NULL,
    "number" TEXT,
    "text_uz" TEXT,
    "text_en" TEXT,
    "text_ru" TEXT,
    "text_oz" TEXT,
    "publish_date" TIMESTAMP(3),
    "effective_date" TIMESTAMP(3),
    "url" TEXT,
    "type" "DocumentTypeEnum",

    CONSTRAINT "Documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactInfo" (
    "id" SERIAL NOT NULL,
    "personal_acc_number" INTEGER,
    "telegram" TEXT,
    "facebook" TEXT,
    "instagram" TEXT,
    "youtube" TEXT,
    "address" TEXT,
    "landmark" TEXT,
    "working_hours" TEXT,

    CONSTRAINT "ContactInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "phone_number" TEXT,
    "title_uz" TEXT,
    "title_en" TEXT,
    "title_ru" TEXT,
    "title_oz" TEXT,
    "email" TEXT,
    "contactInfoId" INTEGER,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DistrictDeputies" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT,
    "desc_uz" TEXT,
    "desc_en" TEXT,
    "desc_ru" TEXT,
    "desc_oz" TEXT,
    "email" TEXT,
    "bio_uz" TEXT,
    "bio_en" TEXT,
    "bio_ru" TEXT,
    "bio_oz" TEXT,

    CONSTRAINT "DistrictDeputies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mahalla" (
    "id" SERIAL NOT NULL,
    "name_uz" TEXT,
    "name_en" TEXT,
    "name_ru" TEXT,
    "name_oz" TEXT,
    "director_fullname_uz" TEXT,
    "director_fullname_en" TEXT,
    "director_fullname_ru" TEXT,
    "director_fullname_oz" TEXT,
    "phone_number" TEXT,

    CONSTRAINT "Mahalla_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PublicCouncil" (
    "id" SERIAL NOT NULL,
    "name_uz" TEXT,
    "name_en" TEXT,
    "name_ru" TEXT,
    "name_oz" TEXT,
    "phone_number" TEXT,
    "email" TEXT,
    "address_uz" TEXT,
    "address_en" TEXT,
    "address_ru" TEXT,
    "address_oz" TEXT,
    "desc_uz" TEXT,
    "desc_en" TEXT,
    "desc_ru" TEXT,
    "desc_oz" TEXT,
    "structure_image" TEXT,

    CONSTRAINT "PublicCouncil_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EmergencyNews" ADD CONSTRAINT "EmergencyNews_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "EmergencyNews"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_contactInfoId_fkey" FOREIGN KEY ("contactInfoId") REFERENCES "ContactInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
