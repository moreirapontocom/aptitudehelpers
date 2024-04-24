# Components

### Alert
### Confirm
### DownloadXlsx
### buildXlsx
### Expander
### Loading
### CustomModal

### Popover

```typescript
<CustomPopover
  header="Header"
  body="body">
    Something
</CustomPopover>
```

### Separator

### TextWithTooltip

```typescript
<TextWithTooltip
  id="unique-id"
  tooltip="Tooltip text">
    Children (button, link, text, etc)
</TextWithTooltip>
```

### Upload

# Contexts

### AlertContext
### AlertProvider
### UserContext
### UserProvider
### ConfirmContext
### ConfirmProvider

# Helpers

### convertFirebaseTimestampToString
### detectUrlInString
### generateGoogleCalendarLink
### generateRandomNumber
### generateRandomString
### hideEmail
### isDOB
### isValidEmail

```typescript
isValidEmail("email@domain.com"); // true
isValidEmail("email@domain"); // false
isValidEmail("email.com"); // false
```

### isValidUrl

```typescript
isValidUrl("https://google.com"); // true
isValidUrl("google.com"); // true
isValidUrl("google@com"); // false
```

### onlyNumbers

```typescript
const phone: any = "+1 (805) 123-456";
onlyNumbers(phone); // 1805123456
```

### removeDuplicatesFromArray
### sleep
### slugifyString

```typescript
const str: string = "This is my super-cool string"
slugifyString(str); // this-is-my-super-cool-string
```
### truncateString