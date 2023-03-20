import React from "react";
import Link from "next/link";
import { useTheme } from "@emotion/react";
import Text from "@/components/shared/Text/Text";
import Icon from "@/components/shared/Icon/Icon";
import { ROUTES } from "@/constants/routes";
import * as S from "./settings.styled";

const SETTINGS_MENU = [
  {
    name: "자주 묻는 질문",
    url: ROUTES.MYPAGE_SETTINGS_FAQ,
  },
  {
    name: "1:1 문의하기",
    url: ROUTES.MYPAGE_SETTINGS_ASK,
  },
  {
    name: "이용약관",
    url: ROUTES.MYPAGE_SETTINGS_TERMSOFUSE,
  },
];

function SettingsPage() {
  const { colors } = useTheme();

  return (
    <div>
      <S.LinkWrap>
        {SETTINGS_MENU.map(menu => (
          <Link href={menu.url} key={menu.name}>
            <Text weight={500} size={16}>
              {menu.name}
            </Text>
            <Icon name="arrowRight" color={colors.grey[600]} />
          </Link>
        ))}
      </S.LinkWrap>
      <S.Wrap>
        <Text weight={500} size={16}>
          앱 버전 <strong>1.0.0</strong>
        </Text>
        <Text className="version" weight={500} size={16}>
          최신버전
        </Text>
      </S.Wrap>
      <S.Wrap>
        <Text className="withdrawal" weight={500} size={16}>
          탈퇴하기
        </Text>
      </S.Wrap>
    </div>
  );
}

export default SettingsPage;
