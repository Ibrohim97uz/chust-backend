import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseModule } from './common/base/base.module';
import { ShowcaseModule } from './showcase/showcase.module';
import { CityNewsModule } from './city-news/city-news.module';
import { DistrictNewsModule } from './district-news/district-news.module';
import { EmergencyNewsModule } from './emergency-news/emergency-news.module';
import { VideoModule } from './video/video.module';
import { GalleryModule } from './gallery/gallery.module';
import { VisualReceptionModule } from './visual-reception/visual-reception.module';
import { EmergencyPhonesModule } from './emergency-phones/emergency-phones.module';
import { HelpPhoneModule } from './help-phone/help-phone.module';
import { HelloChustModule } from './hello-chust/hello-chust.module';
import { ServicesModule } from './services/services.module';
import { OpportunitiesModule } from './opportunities/opportunities.module';
import { UsefulAppsModule } from './useful-apps/useful-apps.module';
import { UsefulCitiesModule } from './useful-cities/useful-cities.module';
import { StructuresModule } from './structures/structures.module';
import { ArticlesModule } from './articles/articles.module';
import { MeetingsModule } from './meetings/meetings.module';
import { DocumentsForCorruptionModule } from './documents-for-corruption/documents-for-corruption.module';
import { CityModule } from './city/city.module';
import { AboutGovernmentModule } from './about-government/about-government.module';
import { StructureDirectorModule } from './structure-director/structure-director.module';
import { StructureLeadershipModule } from './structure-leadership/structure-leadership.module';
import { StructureCentralApparatusModule } from './structure-central-apparatus/structure-central-apparatus.module';
import { StructureSystemOrgModule } from './structure-system-org/structure-system-org.module';
import { OrganizationalStructureModule } from './organizational-structure/organizational-structure.module';
import { PressServiceModule } from './press-service/press-service.module';
import { DocumentsModule } from './documents/documents.module';
import { ContactInfoModule } from './contact-info/contact-info.module';
import { ContactModule } from './contact/contact.module';
import { DistrictDeputiesModule } from './district-deputies/district-deputies.module';
import { MahallaModule } from './mahalla/mahalla.module';
import { PublicCouncilModule } from './public-council/public-council.module';
import { PrismaModule } from './common/prisma/prisma.module';

@Module({
  imports: [
    BaseModule,
    ShowcaseModule,
    CityNewsModule,
    DistrictNewsModule,
    EmergencyNewsModule,
    VideoModule,
    GalleryModule,
    VisualReceptionModule,
    EmergencyPhonesModule,
    HelpPhoneModule,
    HelloChustModule,
    ServicesModule,
    OpportunitiesModule,
    UsefulAppsModule,
    UsefulCitiesModule,
    StructuresModule,
    ArticlesModule,
    MeetingsModule,
    DocumentsForCorruptionModule,
    CityModule,
    AboutGovernmentModule,
    StructureDirectorModule,
    StructureLeadershipModule,
    StructureCentralApparatusModule,
    StructureSystemOrgModule,
    OrganizationalStructureModule,
    PressServiceModule,
    DocumentsModule,
    ContactInfoModule,
    ContactModule,
    DistrictDeputiesModule,
    MahallaModule,
    PublicCouncilModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
