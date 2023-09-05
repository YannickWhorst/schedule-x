import { CalendarConfigExternal } from '../../stateful/config/calendar-config'
import { ConfigBuilder as DatePickerConfigBuilder } from '@schedule-x/date-picker/src/utils/stateful/config/config.builder'
import { Placement } from '@schedule-x/date-picker/src/enums/placement.enum'

export const createDatePickerConfig = (
  config: CalendarConfigExternal,
  dateSelectionCallback: (date: string) => void
) =>
  new DatePickerConfigBuilder()
    .withLocale(config.locale)
    .withFirstDayOfWeek(config.firstDayOfWeek)
    .withMin(config.datePicker?.min)
    .withMax(config.datePicker?.max)
    .withStyle(config.datePicker?.style)
    .withPlacement(Placement.BOTTOM_END)
    .withListeners({ onChange: dateSelectionCallback })
    .build()