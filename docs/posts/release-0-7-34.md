---
date: 2024-06-06
category:
  - Update
  - MessengerBot
tag:
  - Update
  - MessengerBot
---

# 0.7.34a 릴리즈 노트

메신저봇R이 대대적 재구현 전 마지막 업데이트입니다.

## What's Changed

### 내부 변경 사항

- 알림 파서가 재구현되었습니다. (카카오톡 9.7.0 이상 알림 구조에 대응합니다.)

### 알림 파서 변경 사항

- 이제, `channelId, logId, userHash`와 같은 값들을 기본으로 사용할 수 있습니다.

### 스크립트 변경 사항

- 라이노 엔진 버전이 1.7.15로 버전 업 되었습니다.
- 실험적 기능으로 `console` api를 사용할 수 있습니다. 프로젝트 생성시 선택 가능합니다.
- `Api.replyRoom` 는 이제 `channelId`로도 보낼 수 있습니다.

### 기술 추가

- [Shizuku](https://shizuku.rikka.app/) 서비스가 추가되었습니다. 설정에서 shizuku 서비스를 바인딩 할 수 있습니다.

## Download
[여기](https://github.com/MessengerBotTeam/msgbot-old-release/releases/tag/0.7.34a)에서 다운받으실 수 있습니다!