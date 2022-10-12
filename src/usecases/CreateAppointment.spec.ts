import { describe, expect, it } from "vitest"
import { Appointment } from "../entities/appointment"
import { CreateAppointment } from "./CreateAppointment"

describe("CreateAppointment", () => {
  it("should create an appointment", () => {
    const createAppointment = new CreateAppointment()

    const startsAt = new Date()
    const endsAt = new Date()
    endsAt.setDate(endsAt.getDate() + 1)

    expect(createAppointment.execute({
      customer: "John Doe",
      startsAt,
      endsAt,
    })).resolves.toBeInstanceOf(Appointment)
  })
})