import { Module } from '@nestjs/common';

import { TaskApplicationModule } from './application/task-application.module';

@Module({
  imports: [TaskApplicationModule],
})
export class TaskModule {}
