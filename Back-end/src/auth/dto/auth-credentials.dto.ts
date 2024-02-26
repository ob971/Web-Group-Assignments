import { IsEmail, IsString, Matches, MaxLength, MinLength, isString } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
    {
      message:
        'password needs to contain at least one uppercase letter, one lowercase letter, one number, and one symbol',
    },
  )
  password: string;

  role:any;
}
