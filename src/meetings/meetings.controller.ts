import { Controller } from '@nestjs/common';
import { MeetingsService } from './meetings.service';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { Meetings } from 'generated/prisma';

@Controller('meetings')
export class MeetingsController extends createBaseController<Meetings>({
  path: 'meetings',
  tag: 'Meetings',
  entity: CreateMeetingDto,
  createDto: CreateMeetingDto,
  updateDto: UpdateMeetingDto,
}) {
  constructor(private readonly meetingsService: MeetingsService) {
    super(meetingsService);
  }
}
