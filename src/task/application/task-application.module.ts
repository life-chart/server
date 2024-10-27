import { Module } from '@nestjs/common';

import { TaskInfrastructureModule } from '#task/infrastructure/task-infrastructure.module';

@Module({
  imports: [TaskInfrastructureModule],
})
export class TaskApplicationModule {}
