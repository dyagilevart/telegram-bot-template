import { Start, Update, Sender } from 'nestjs-telegraf';

import { RegistrationService } from 'src/BusinessModule/RegistrationModule/registration.service';

@Update()
export class TelegramUpdate {
  constructor(private registrationService: RegistrationService) {}

  @Start()
  async onStart(@Sender('id') id: number) {
    if (!(await this.registrationService.isUserAlreadyRegistered(id))) {
      await this.registrationService.register({
        id,
      });
    }
  }
}
