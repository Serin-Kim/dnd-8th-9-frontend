/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import useUserStore from "@/store/user";
import { DefaultProfileImage, EditIcon } from "@/assets/images";
import * as S from "./profile.styled";

function ProfileEditPage() {
  const { userName, email, profileImage, phoneNumber } = useUserStore();
  const [userNameInput, setUserNameInput] = useState(userName);
  const [emailInput, setEmailInput] = useState(email);
  const [phoneNumberInput, setPhoneNumberInput] = useState(phoneNumber);

  const handleUserNameInput = (e: { target: { value: React.SetStateAction<string | null> } }) => {
    setUserNameInput(e.target.value);
  };

  const handleEmailInput = (e: {
    target: { value: React.SetStateAction<string | null | undefined> };
  }) => {
    setEmailInput(e.target.value);
  };

  const handlePhoneNumberInput = (e: {
    target: { value: React.SetStateAction<string | null | undefined> };
  }) => {
    setPhoneNumberInput(e.target.value);
  };

  return (
    <S.Container>
      <S.ProfileImage>
        {profileImage ? <img src={profileImage} /> : <DefaultProfileImage />}
        <S.EditIcon>
          <EditIcon />
        </S.EditIcon>
      </S.ProfileImage>
      <S.Cell>
        <S.Title>닉네임</S.Title>
        <S.Input>
          <input value={userNameInput || `기존닉네임`} onChange={handleUserNameInput} />
        </S.Input>
      </S.Cell>
      <S.Cell>
        <S.Title>이메일</S.Title>
        <S.Input>
          <input value={emailInput || `abcdef@gmail.com`} onChange={handleEmailInput} />
        </S.Input>
      </S.Cell>
      <S.Cell>
        <S.Title>휴대폰 번호</S.Title>
        <S.Input>
          <input value={phoneNumberInput || `01012345678`} onChange={handlePhoneNumberInput} />
        </S.Input>
      </S.Cell>
    </S.Container>
  );
}

export default ProfileEditPage;
