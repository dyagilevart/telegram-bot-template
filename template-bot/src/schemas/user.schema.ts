import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PlaceDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  userId: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
